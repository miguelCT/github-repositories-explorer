import { Box, Card, CardHeader, Typography } from '@mui/material';
import { type FC } from 'react';

import StarIcon from '@mui/icons-material/Star';

type RepoInfoProps = {
    description: string | null;
    name: string;
    stars?: number;
};
const RepoInfo: FC<RepoInfoProps> = ({ description, name, stars }) => {
    // Format the number of stars using the runtime locale
    const starsText =
        stars !== undefined ? new Intl.NumberFormat().format(stars) : '-';
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
                        <Typography variant="subtitle2">{starsText}</Typography>
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
