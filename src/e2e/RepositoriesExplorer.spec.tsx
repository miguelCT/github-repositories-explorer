import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('Repositories explorer page', () => {
    test('search using the enter key', async ({ page }) => {
        await page.getByPlaceholder('Enter username').fill('mui');
        await page.getByPlaceholder('Enter username').press('Enter');
        // Check that the url param has updated
        expect(page.url()).toContain('?search=mui');
        await expect(page.getByText('Showing users for: "mui"')).toBeVisible();
        await expect(
            page.getByRole('button', { name: 'mui', exact: true }),
        ).toBeVisible();
    });

    test('search using the Search button', async ({ page }) => {
        await page.getByPlaceholder('Enter username').fill('mui');
        await page.getByRole('button', { name: 'Search' }).click();
        await expect(page.getByText('Showing users for: "mui"')).toBeVisible();
        await expect(
            page.getByRole('button', { name: 'mui', exact: true }),
        ).toBeVisible();
    });

    test('search several usernames and explore the user repositories', async ({
        page,
    }) => {
        // search in "mui" username
        await page.getByPlaceholder('Enter username').fill('mui');
        await page.getByRole('button', { name: 'Search' }).click();
        await page.getByRole('button', { name: 'mui', exact: true }).click();
        await expect(
            page.getByRole('button', { name: 'mui', exact: true }),
        ).toBeVisible();
        // The material-ui repository should be visible
        await expect(
            page.getByText('material-ui', { exact: true }),
        ).toBeVisible();
        await expect(page.getByTestId('material-ui-stars')).toBeVisible();

        await page.getByRole('button', { name: 'MuiseDestiny' }).click();
        await page.getByText('langchainjs0').click();

        await page.getByPlaceholder('Enter username').click();
        await page.getByPlaceholder('Enter username').fill('miguelCT');
        await page.getByRole('button', { name: 'Search' }).click();
        await page.getByText('Showing users for: "miguelCT"').click();
        await page
            .getByRole('button', { name: 'miguelCT', exact: true })
            .click();
        // The my-workouts repository should be visible
        await expect(page.getByText('my-workouts')).toBeVisible();
        await expect(page.getByTestId('my-workouts-stars')).toBeVisible();
    });

    test('search directly reading the url param', async ({ page }) => {
        // After entering the page with the search param, the results filterd by that param should be visible
        await page.goto('/?search=mui');
        await expect(page.getByText('Showing users for: "mui"')).toBeVisible();
        await expect(
            page.getByRole('button', { name: 'mui', exact: true }),
        ).toBeVisible();
    });
});
