import { Box, Card, CardHeader, Typography } from '@mui/material';
import { type FC } from 'react';
import { type UserRepo } from 'utils/types';

import StarIcon from '@mui/icons-material/Star';

const RepoInfo: FC<UserRepo> = ({ description, name, stars }) => {
    return (
        <Card
            variant="outlined"
            sx={{
                backgroundColor: theme => theme.palette.grey['300'],
            }}
        >
            <CardHeader
                title={name}
                subheader={description}
                action={
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                        }}
                    >
                        <Typography variant="subtitle2">{stars}</Typography>
                        <StarIcon fontSize="small" />
                    </Box>
                }
                titleTypographyProps={{ variant: 'h6' }}
                subheaderTypographyProps={{ variant: 'body2' }}
            />
        </Card>
    );
};

export default RepoInfo;
