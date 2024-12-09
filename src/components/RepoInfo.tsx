import { Card, CardHeader } from '@mui/material';
import { type FC } from 'react';
import { type UserRepo } from 'utils/types';

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
                action={<>Stars: {stars}</>}
                titleTypographyProps={{ variant: 'h6' }}
                subheaderTypographyProps={{ variant: 'body2' }}
            />
        </Card>
    );
};

export default RepoInfo;
