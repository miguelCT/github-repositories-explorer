import { type Meta, type StoryObj } from '@storybook/react';
import UserList from './UserList';

const meta: Meta<typeof UserList> = {
    title: 'Components/UserList',
    component: UserList,
};

export default meta;

type Story = StoryObj<typeof UserList>;
export const Default: Story = {
    args: {
        users: [
            {
                id: 1,
                login: 'johnDoe',
            },
            {
                id: 2,
                login: 'janeDoe',
            },
        ],
        UserInnerInformation: ({ userName }) => <i>{`Repos of ${userName}`}</i>,
    },
};

export const LongList: Story = {
    args: {
        users: Array.from({ length: 10 }, (_, i) => ({
            id: i + 1,
            login: `user${i}`,
        })),
        UserInnerInformation: ({ userName }) => <i>{`Repos of ${userName}`}</i>,
    },
};
