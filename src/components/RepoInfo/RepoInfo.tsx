import { Box, Card, CardHeader, Typography } from '@mui/material';
import { type FC } from 'react';

import StarIcon from '@mui/icons-material/Star';

export type RepoInfoProps = {
    /** The description of the repository. */
    description: string | null;
    /** The name of the repository.  */
    name: string;
    /** The number of stars received by the repository. */
    stars?: number;
};
/**
 * Displays basic information about a Github repository.
 */
const RepoInfo: FC<RepoInfoProps> = ({ description, name, stars }) => {
    // Format the number of stars using the runtime locale
    const starsText =
        stars !== undefined ? new Intl.NumberFormat().format(stars) : '-';
    return (
        <Card
            variant="outlined"
            sx={{
                backgroundColor: theme => theme.palette.grey['300'],
                height: '100%',
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
                        <Typography
                            variant="subtitle2"
                            data-testid={`${name}-stars`}
                        >
                            {starsText}
                        </Typography>
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
