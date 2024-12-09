import { LinearProgress } from '@mui/material';
import { type FC, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router';
import { USERS_QUERY_KEY } from 'utils/constants';
import { type User } from 'utils/types';
import UserRepos from '../components/UserRepos';
import UsersAccordion from '../components/UsersAccordion';
import UserSearch from '../components/UserSearch';

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
        // TODO create am Error component
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
        <>
            <form onSubmit={submitSearch} autoComplete="off">
                <UserSearch
                    inputSearch={inputSearch}
                    onSearch={setInputSearch}
                />
            </form>
            <p>{searchText && `Showing users for: "${searchText}"`}</p>
            <div>{isLoadingUsers && <LinearProgress />}</div>

            {users?.map(user => (
                <UsersAccordion key={user.id} userName={user.username}>
                    <UserRepos userName={user.username} />
                </UsersAccordion>
            ))}
        </>
    );
};

export default UserList;
