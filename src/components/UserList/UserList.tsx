import { type FC } from 'react';
import { type UserSearchItem } from 'utils/types';
import UsersAccordion from '../UsersAccordion';

export type UserListProps = {
    /** List of users */
    users: UserSearchItem[];
    /** Component to be displayed inside the accordion */
    UserInnerInformation: FC<{ userName: UserSearchItem['login'] }>;
};
/**
 * Displays a list of users in an accordion format.
 * Each user is displayed in an accordion that can be expanded to show a dynamic component
 */
const UserList: FC<UserListProps> = ({
    users,
    UserInnerInformation: UserReposComponent,
}) => {
    return (
        <>
            {users.map(user => (
                <UsersAccordion key={user.id} userName={user.login}>
                    <UserReposComponent userName={user.login} />
                </UsersAccordion>
            ))}
        </>
    );
};

export default UserList;
