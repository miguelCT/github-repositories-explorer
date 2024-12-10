import { useQuery } from '@tanstack/react-query';
import api from 'utils/api';
import { USER_REPOS_QUERY_KEY } from 'utils/constants';

export const getUserRepos = async (userName: string) => {
    const response = await api.repos.listForUser({
        username: userName,
    });

    return response.data;
};

export default function useFetchUserRepos(userName: string) {
    return useQuery({
        queryKey: [USER_REPOS_QUERY_KEY, userName],

        queryFn: () => getUserRepos(userName),
    });
}
