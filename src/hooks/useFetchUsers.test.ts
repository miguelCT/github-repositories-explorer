import { type UserSearchItem } from 'utils/types';
import { describe, expect, it, vi } from 'vitest';
import api from '../utils/api';
import { MAX_USERS_AMOUNT } from '../utils/constants';
import { fetchUsers } from './useFetchUsers';

const userList: UserSearchItem[] = [
    {
        id: 1,
        login: 'repo1',
    },
    {
        id: 2,
        login: 'repo2',
    },
];
describe('fetchUsers', () => {
    it('fetches a list of users with the provided search text', async () => {
        const apiMock = vi.spyOn(api.search, 'users');
        apiMock.mockResolvedValueOnce({
            data: {
                // @ts-expect-error We only specify the properties that we need
                items: userList,
            },
        });
        const response = await fetchUsers('username');

        expect(apiMock).toHaveBeenCalledWith({
            q: 'username',
            per_page: MAX_USERS_AMOUNT,
        });
        expect(response).toEqual(userList);
    });

    it('fetches a list of users without search text', async () => {
        const apiMock = vi.spyOn(api.search, 'users');
        apiMock.mockResolvedValueOnce({
            data: {
                // @ts-expect-error We only specify the properties that we need
                items: userList,
            },
        });
        const response = await fetchUsers();

        expect(apiMock).toHaveBeenCalledWith({
            q: '',
            per_page: MAX_USERS_AMOUNT,
        });
        expect(response).toEqual(userList);
    });

    it('returns an error if the fetch fails', async () => {
        const apiMock = vi.spyOn(api.search, 'users');

        const consoleSpy = vi.spyOn(console, 'error');
        apiMock.mockRejectedValueOnce(new Error('Mocked error'));

        await expect(fetchUsers()).rejects.toThrowError();
        expect(consoleSpy).toHaveBeenCalledWith(
            'Error fetching users:',
            new Error('Mocked error'),
        );
    });
});
