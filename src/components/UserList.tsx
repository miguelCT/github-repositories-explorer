import { type FC } from 'react';
import { type UserSearchItem } from 'utils/types';
import UserRepos from '../features/UserRepos';
import UsersAccordion from './UsersAccordion';

type UserListProps = {
    users: UserSearchItem[];
};
const UserList: FC<UserListProps> = ({ users }) => {
    return (
        <>
            {users.map(user => (
                <UsersAccordion key={user.id} userName={user.login}>
                    <UserRepos userName={user.login} />
                </UsersAccordion>
            ))}
        </>
    );
};

export default UserList;
