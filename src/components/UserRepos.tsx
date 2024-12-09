import { type FC } from 'react';
import { useQuery } from 'react-query';
import { USER_REPOS_QUERY_KEY } from 'utils/constants';
import { type UserRepo } from 'utils/types';
import { Box, CircularProgress } from '@mui/material';
import RepoInfo from './RepoInfo';

const reposMock = Array.from({ length: 5 }).map((_, i) => ({
    userId: i + 1,
    repoId: i + 1,
    name: `repo-${i + 1}`,
    stars: i * 10,
    description: `Some description for repo ${i + 1}`,
})) as UserRepo[];

const getUserRepos = async (_userName: string) => {
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

type UserReposProps = {
    userName: string;
};
const UserRepos: FC<UserReposProps> = ({ userName }) => {
    const {
        data: userRepos,
        isLoading,
        isError,
        error,
    } = useQuery([USER_REPOS_QUERY_KEY, userName], () =>
        getUserRepos(userName),
    );

    const isLoadingRepos = isLoading;

    if (isError) {
        // TODO create am Error component
        return <span>Error: {(error as Error).message}</span>;
    }

    if (isLoadingRepos) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                }}
            >
                <CircularProgress size={18} />
                Loading...
            </Box>
        );
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
            }}
        >
            {userRepos?.map(repo => <RepoInfo key={repo.repoId} {...repo} />)}
        </Box>
    );
};

export default UserRepos;
