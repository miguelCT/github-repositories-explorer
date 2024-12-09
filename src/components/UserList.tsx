import { useQuery } from 'react-query';
import { USERS_QUERY_KEY } from 'utils/constants';
import { type User } from 'utils/types';
import { type FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

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

const getUsers = async (searchText?: string) => {
    // eslint-disable-next-line no-console
    console.log('searchText', searchText);

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

const UserList: FC = () => {
    const { search, pathname } = useLocation();
    const searchParams = new URLSearchParams(search);
    const [searchText, setSearchText] = useState(
        searchParams.get('search') ?? '',
    );

    const [inputSearch, setInputSearch] = useState(searchText);

    const navigate = useNavigate();

    const {
        data: users,
        isFetching,
        isLoading,
        isError,
        error,
    } = useQuery([USERS_QUERY_KEY, searchText], () => getUsers(searchText), {
        enabled: !!searchText,
    });

    const isLoadingUsers = isFetching || isLoading;

    if (isError) {
        return <span>Error: {(error as Error).message}</span>;
    }

    const submitSearch = (event: React.FormEvent) => {
        event.preventDefault();
        // TODO review if make this pure
        setSearchText(inputSearch);
        event.preventDefault();
        if (inputSearch) {
            searchParams.set('search', inputSearch);
        } else {
            searchParams.delete('search');
        }
        return navigate(`${pathname}?${searchParams.toString()}`);
    };

    return (
        <form onSubmit={submitSearch} autoComplete="off">
            <input
                type="text"
                placeholder="Username"
                onChange={e => setInputSearch(e.target.value)}
                value={inputSearch}
                autoFocus
            />
            <button type="submit">Search</button>
            <div>{isLoadingUsers && 'Loading users...'}</div>
            <p>{searchText && `Showing users for: "${searchText}"`}</p>
            <ul>
                {users?.map(user => <li key={user.id}>{user.username}</li>)}
            </ul>
        </form>
    );
};

export default UserList;
