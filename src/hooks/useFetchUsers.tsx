import { useQuery } from 'react-query';
import { USERS_QUERY_KEY } from 'utils/constants';
import type { User } from 'utils/types';

const usersMock = [
    {
        id: 1234567,
        username: 'awesomedev',
    },
    {
        id: 7890123,
        username: 'data_scientist',
    },
    {
        id: 4567890,
        username: 'js_wizard',
    },
    {
        id: 2345678,
        username: 'art_lover',
    },
    {
        id: 9012345,
        username: 'crypto_enthusiast',
    },
];
const getUsers = async (_searchText?: string) => {
    const response = await new Promise<Response>(resolve => {
        setTimeout(() => {
            resolve(new Response(JSON.stringify(usersMock)));
        }, 1000);
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json() as Promise<User[]>;
};
export default function useFetchUsers(searchText: string) {
    return useQuery([USERS_QUERY_KEY, searchText], () => getUsers(searchText), {
        enabled: !!searchText,
    });
}
