import { type FC } from 'react';
import { type User } from 'utils/types';
import UserRepos from './UserRepos';
import UsersAccordion from './UsersAccordion';

type UserListProps = {
    users: User[];
};
const UserList: FC<UserListProps> = ({ users }) => {
    return (
        <>
            {users.map(user => (
                <UsersAccordion key={user.id} userName={user.username}>
                    <UserRepos userName={user.username} />
                </UsersAccordion>
            ))}
        </>
    );
};

export default UserList;
