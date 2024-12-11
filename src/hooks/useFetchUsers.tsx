import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';
import { MAX_USERS_AMOUNT, USERS_QUERY_KEY } from '../utils/constants';

export const fetchUsers = async (searchText = '') => {
    try {
        const response = await api.search.users({
            per_page: MAX_USERS_AMOUNT,
            q: searchText,
        });
        return response.data.items;
    } catch (error) {
        // We rethrow the error so that the error is propagated to react-query
        // and it can be handled by the error boundary
        // eslint-disable-next-line no-console
        console.error('Error fetching users:', error);
        throw error;
    }
};
export default function useFetchUsers(searchText: string) {
    return useQuery({
        queryKey: [USERS_QUERY_KEY, searchText],
        queryFn: () => fetchUsers(searchText),
        enabled: !!searchText,
    });
}
