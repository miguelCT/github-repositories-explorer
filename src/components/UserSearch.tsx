import { Box, Button, TextField } from '@mui/material';
import { type FC } from 'react';

type UserSearchProps = {
    inputSearch: string;
    onSearch: (searchText: string) => void;
};

const UserSearch: FC<UserSearchProps> = ({ inputSearch, onSearch }) => {
    return (
        <Box
            sx={theme => ({
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                [theme.breakpoints.up('sm')]: {
                    flexDirection: 'row',
                },
            })}
        >
            <TextField
                type="text"
                placeholder="Enter username"
                onChange={e => onSearch(e.target.value)}
                value={inputSearch}
                size="small"
                autoFocus
            />
            <Button type="submit" variant="contained">
                Search
            </Button>
        </Box>
    );
};

export default UserSearch;
