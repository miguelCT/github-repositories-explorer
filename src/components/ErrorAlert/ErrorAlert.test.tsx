import { fn } from '@storybook/test';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import ErrorAlert from './ErrorAlert';

describe('ErrorAlert', () => {
    afterEach(() => {
        cleanup();
    });
    it('renders error message', () => {
        const errorMessage = 'Something went wrong';
        render(<ErrorAlert message={errorMessage} />);
        expect(
            screen.getByText(errorMessage, {
                exact: false,
            }),
        ).toBeInTheDocument();
    });

    it('renders retry button when onRetry is provided', () => {
        const onRetry = fn();
        render(<ErrorAlert message="Error" onRetry={onRetry} />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('calls onRetry when retry button is clicked', () => {
        const onRetry = fn();
        render(<ErrorAlert message="Error" onRetry={onRetry} />);
        const retryButton = screen.getByRole('button');
        fireEvent.click(retryButton);
        expect(onRetry).toHaveBeenCalledTimes(1);
    });

    it('does not render retry button when onRetry is not provided', () => {
        render(<ErrorAlert message="Error" />);
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
});
