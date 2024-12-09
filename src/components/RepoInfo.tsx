import { type FC } from 'react';
import { type UserRepo } from 'utils/types';

const RepoInfo: FC<UserRepo> = ({ description, name, stars }) => {
    return (
        <>
            <p>
                <b>{name} </b>Stars: {stars}
            </p>
            <i>{description}</i>
        </>
    );
};

export default RepoInfo;
