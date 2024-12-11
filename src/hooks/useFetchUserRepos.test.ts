import { describe, expect, it, vi } from 'vitest';
import { type UserRepo } from 'utils/types';
import api from '../utils/api';
import { fetchUserRepos } from './useFetchUserRepos';

const reposList: UserRepo[] = [
    {
        id: 1,
        name: 'repo1',
        description: 'This is a description',
    },
    {
        id: 2,
        name: 'repo2',
        description: '',
    },
];
describe('fetchUserRepos', () => {
    it('fetches user repositories successfully', async () => {
        const apiMock = vi.spyOn(api.repos, 'listForUser');
        apiMock.mockResolvedValueOnce({
            // @ts-expect-error We only specify the properties that we need
            data: reposList,
        });
        const response = await fetchUserRepos('username');

        expect(apiMock).toHaveBeenCalledWith({ username: 'username' });
        expect(response).toEqual(reposList);
    });

    it('returns an error if the fetch fails', async () => {
        const apiMock = vi.spyOn(api.repos, 'listForUser');

        const consoleSpy = vi
            .spyOn(console, 'error')
            .mockImplementationOnce(vi.fn());
        apiMock.mockRejectedValueOnce(new Error('Mocked error'));

        await expect(fetchUserRepos('username')).rejects.toThrowError();
        expect(consoleSpy).toHaveBeenCalledWith(
            'Error fetching user repositories:',
            new Error('Mocked error'),
        );
    });
});
