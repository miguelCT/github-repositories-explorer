import { type UserSearchItem } from 'utils/types';
import { describe, expect, it, vi } from 'vitest';
import * as ReactQuery from 'react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type FC, type PropsWithChildren } from 'react';
import { renderHook, waitFor } from '@testing-library/react';
import api from '../utils/api';
import { MAX_USERS_AMOUNT } from '../utils/constants';
import useFetchUsers, { fetchUsers } from './useFetchUsers';

// src/hooks/useFetchUsers.test.ts

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

        const consoleSpy = vi
            .spyOn(console, 'error')
            .mockImplementationOnce(vi.fn());
        apiMock.mockRejectedValueOnce(new Error('Mocked error'));

        await expect(fetchUsers()).rejects.toThrowError();
        expect(consoleSpy).toHaveBeenCalledWith(
            'Error fetching users:',
            new Error('Mocked error'),
        );
    });
});
describe('useFetchUsers', () => {
    const queryClient = new QueryClient();
    const wrapper: FC<PropsWithChildren> = ({ children }) => (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );

    vi.spyOn(api.search, 'users').mockImplementation(() =>
        // @ts-expect-error We only specify the properties that we need
        Promise.resolve({
            data: {
                items: userList,
            },
        }),
    );

    it('calls useQuery with the correct arguments', async () => {
        const { result } = renderHook(() => useFetchUsers('test'), { wrapper });
        await waitFor(() => expect(result.current.isSuccess).toBe(true));
        expect(result.current.data).toEqual(userList);
    });

    it('calls useQuery and the query is paused until a username is provided', async () => {
        const { result, rerender } = renderHook(
            ({ userName }: { userName: string }) => useFetchUsers(userName),
            {
                wrapper,
                initialProps: { userName: '' },
            },
        );
        // The query will be pending until a userName is provided
        expect(result.current.isPending).toBe(true);

        rerender({ userName: 'test' });
        await waitFor(() => expect(result.current.isPending).toBe(false));
    });
});
