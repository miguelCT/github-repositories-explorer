import { useQuery } from '@tanstack/react-query';
import api from 'utils/api';
import { USERS_QUERY_KEY } from 'utils/constants';

const getUsers = async (searchText = '') => {
    const response = await api.search.users({
        per_page: 5,
        q: searchText,
    });

    return response.data.items;
};
export default function useFetchUsers(searchText: string) {
    return useQuery({
        queryKey: [USERS_QUERY_KEY, searchText],
        queryFn: () => getUsers(searchText),
        enabled: !!searchText,
    });
}
