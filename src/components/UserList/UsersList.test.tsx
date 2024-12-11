// src/components/UserList/UserList.test.tsx

import {
    cleanup,
    fireEvent,
    render,
    screen,
    within,
} from '@testing-library/react';
import { it, describe, expect, afterEach } from 'vitest';
import UserList from './UserList';

const InfoMock = () => <i>Info</i>;
const users = [
    {
        id: 1,
        login: 'johnDoe',
    },
    {
        id: 2,
        login: 'janeDoe',
    },
];

describe('UserList', () => {
    afterEach(() => {
        cleanup();
    });
    it('renders a list of users', () => {
        render(<UserList users={users} UserInnerInformation={InfoMock} />);

        expect(screen.getByText('johnDoe')).toBeInTheDocument();
        expect(screen.getByText('janeDoe')).toBeInTheDocument();
    });

    it('renders an empty list when no users are provided', () => {
        render(<UserList users={[]} UserInnerInformation={InfoMock} />);

        expect(screen.queryByText('johnDoe')).not.toBeInTheDocument();
        expect(screen.queryByText('janeDoe')).not.toBeInTheDocument();
    });

    it('renders the UserInnerInformation component when accordion is expanded', () => {
        const { getByText, getAllByRole } = render(
            <UserList users={users} UserInnerInformation={InfoMock} />,
        );

        const accordionButton = getAllByRole('button')[0];
        within(accordionButton).getByText('johnDoe');
        fireEvent.click(accordionButton);

        expect(getByText('Info')).toBeInTheDocument();
    });
});
