import { type Meta, type StoryObj } from '@storybook/react';
import React, { type FormEvent, FormEventHandler, useState } from 'react';
import { expect, fn, userEvent, within } from '@storybook/test';
import UserSearch from './UserSearch';

const meta: Meta<typeof UserSearch> = {
    title: 'Components/UserSearch',
    component: UserSearch,
};

export default meta;

const handleSearch = fn((searchText: string) => {
    // eslint-disable-next-line no-console
    console.log(`Searching for: ${searchText}`);
});

type Story = StoryObj<typeof UserSearch>;
export const Default: Story = {
    args: {
        inputSearch: '',
        onSearch: () => {},
    },
};

export const WithSearchText: Story = {
    args: {
        inputSearch: 'johnDoe',
        onSearch: () => {},
    },
};

export const WithOnSearchCallback: Story = {
    args: {
        inputSearch: '',
        onSearch: handleSearch,
    },
};

const handleSubmit = fn((e: FormEvent) => e.preventDefault());
export const Interactive: Story = {
    args: {
        onSearch: handleSearch,
    },
    decorators: [
        Story => (
            <form onSubmit={handleSubmit}>
                <Story />
            </form>
        ),
    ],
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const searchInput = canvas.getByRole('textbox');
        const searchButton = canvas.getByRole('button');

        await userEvent.type(searchInput, 'johnDoe');
        await expect(searchInput).toHaveValue('johnDoe');
        await expect(handleSearch).toHaveBeenCalledWith('johnDoe');

        await userEvent.click(searchButton);
        await expect(handleSubmit).toHaveBeenCalled();
    },
};
