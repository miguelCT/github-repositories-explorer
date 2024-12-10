import { type Meta, type StoryObj } from '@storybook/react';
import RepoInfo from './RepoInfo';

const meta: Meta<typeof RepoInfo> = {
    title: 'Components/RepoInfo',
    component: RepoInfo,
};

export default meta;

type Story = StoryObj<typeof RepoInfo>;

export const Default: Story = {
    args: {
        name: 'Example Repository',
        description: 'This is an example repository.',
        stars: 12345,
    },
};

export const WithLongDescription: Story = {
    args: {
        name: 'Example Repository',
        description:
            'This is an example repository with a very long description that should wrap to multiple lines. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae earum quos voluptate molestias debitis laborum. Corporis tempora inventore mollitia vitae, minima soluta. Atque, dolor dicta adipisci mollitia quo provident totam!',
        stars: 100,
    },
};

export const WithoutStars: Story = {
    args: {
        name: 'Example Repository',
        description: 'This is an example repository.',
    },
};

export const WithoutDescription: Story = {
    args: {
        name: 'Example Repository',
        stars: 100,
    },
};
