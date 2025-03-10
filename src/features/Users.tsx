import { LinearProgress } from '@mui/material';
import ErrorAlert from 'components/ErrorAlert';
import { type FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import UserList from '../components/UserList';
import UserSearch from '../components/UserSearch';
import useFetchUsers from '../hooks/useFetchUsers';
import UserRepos from './UserRepos';

const Users: FC = () => {
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
        refetch,
    } = useFetchUsers(searchText);

    const isLoadingUsers = isFetching || isLoading;

    const submitSearch = (event: React.FormEvent) => {
        // Prevent the default form submission reloading the page
        event.preventDefault();

        setSearchText(inputSearch);
        // Update the URL with the new search text or remove the search param if the input is empty
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

            {isError && (
                <ErrorAlert message={error.message} onRetry={refetch} />
            )}
            <p>{!isLoadingUsers && users?.length === 0 && 'No users found'}</p>
            <UserList users={users ?? []} UserInnerInformation={UserRepos} />
        </>
    );
};

export default Users;
