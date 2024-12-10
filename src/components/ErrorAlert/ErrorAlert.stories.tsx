import { type Meta, type StoryObj } from '@storybook/react';
import ErrorAlert from './ErrorAlert';

const meta: Meta<typeof ErrorAlert> = {
    title: 'Components/ErrorAlert',
    component: ErrorAlert,
};

export default meta;
type Story = StoryObj<typeof ErrorAlert>;

export const Default: Story = {
    args: {
        message: 'An error occurred.',
    },
};

export const WithRetry: Story = {
    args: {
        message: 'An error occurred.',
        // eslint-disable-next-line no-alert
        onRetry: () => alert('Retrying...'),
    },
};

export const WithoutMessage: Story = {
    args: {},
};
