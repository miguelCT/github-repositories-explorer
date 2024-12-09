import { useQuery } from 'react-query';
import { USER_REPOS_QUERY_KEY } from 'utils/constants';
import { type UserRepo } from 'utils/types';

const reposMock = Array.from({ length: 10 }).map((_, i) => ({
    userId: i + 1,
    repoId: i + 1,
    name: `repo-${i + 1}`,
    stars: i * 10,
    description: `Some description for repo ${i + 1}`,
})) as UserRepo[];

export const getUserRepos = async (_userName: string) => {
    const response = await new Promise<Response>(resolve => {
        setTimeout(
            () => {
                resolve(new Response(JSON.stringify(reposMock)));
            },
            Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000,
        );
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json() as Promise<UserRepo[]>;
};

export default function useFetchUserRepos(userName: string) {
    return useQuery([USER_REPOS_QUERY_KEY, userName], () =>
        getUserRepos(userName),
    );
}
