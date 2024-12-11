// src/components/UserSearch/UserSearch.test.tsx

import {
    render,
    screen,
    fireEvent,
    waitFor,
    cleanup,
} from '@testing-library/react';
import { it, describe, expect, afterEach, vi } from 'vitest';
import { userEvent } from '@storybook/test';
import { type FormEvent } from 'react';
import UserSearch from './UserSearch';

const onSearch = vi.fn(() => {});

describe('UserSearch', () => {
    afterEach(() => {
        cleanup();
    });
    it('renders the search input and the button', () => {
        render(<UserSearch inputSearch="" onSearch={() => {}} />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders the search input with the provided value', () => {
        const input = 'johnDoe';
        render(<UserSearch inputSearch={input} onSearch={() => {}} />);
        expect(screen.getByRole('textbox')).toHaveValue(input);
    });

    it('calls "onSearch" every time the input changes', async () => {
        const user = userEvent.setup();
        const inputText = 'johnDoe';
        render(<UserSearch inputSearch={''} onSearch={onSearch} />);
        const input = screen.getByRole('textbox');
        await user.type(input, inputText);
        expect(onSearch).toHaveBeenCalledTimes(7);
    });

    it('calls form "onSubmit" when the search button is clicked', async () => {
        const user = userEvent.setup();
        const handleSubmit = vi.fn((e: FormEvent) => e.preventDefault());

        render(
            <form onSubmit={handleSubmit}>
                <UserSearch inputSearch={''} onSearch={onSearch} />
            </form>,
        );
        await user.click(screen.getByRole('button'));
        expect(handleSubmit).toHaveBeenCalledOnce();
    });
});
