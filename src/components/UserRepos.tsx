import { Box, CircularProgress, Grid2 as Grid } from '@mui/material';
import useFetchUserRepos from 'hooks/useFetchUserRepos';
import { type FC } from 'react';
import RepoInfo from './RepoInfo';
import ErrorAlert from './ErrorAlert';

type UserReposProps = {
    userName: string;
};
const UserRepos: FC<UserReposProps> = ({ userName }) => {
    const {
        data: userRepos,
        isLoading,
        isError,
        error,
        refetch,
    } = useFetchUserRepos(userName);

    const isLoadingRepos = isLoading;

    if (isError) {
        return (
            <ErrorAlert message={(error as Error).message} onRetry={refetch} />
        );
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
        <Grid container spacing={1}>
            {userRepos?.map(repo => (
                <Grid key={repo.id} size={{ xs: 12, md: 6 }}>
                    <RepoInfo
                        name={repo.name}
                        description={repo.description}
                        stars={repo.stargazers_count}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default UserRepos;
