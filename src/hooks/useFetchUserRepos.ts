import { useQuery } from '@tanstack/react-query';
import api from 'utils/api';
import { USER_REPOS_QUERY_KEY } from 'utils/constants';

export const getUserRepos = async (userName: string) => {
    try {
        const response = await api.repos.listForUser({
            username: userName,
        });
        return response.data;
    } catch (error) {
        // We rethrow the error so that the error is propagated to react-query
        // and it can be handled by the error boundary
        // eslint-disable-next-line no-console
        console.error('Error fetching user repositories:', error);
        throw error;
    }
};

export default function useFetchUserRepos(userName: string) {
    return useQuery({
        queryKey: [USER_REPOS_QUERY_KEY, userName],

        queryFn: () => getUserRepos(userName),
    });
}
