import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import RepoInfo from './RepoInfo';

const description = 'This is an example repository.';
const name = 'Example Repository';
const stars = 100;

describe('RepoInfo', () => {
    it('renders repository details', () => {
        render(
            <RepoInfo name={name} stars={stars} description={description} />,
        );
        expect(screen.getByText(name)).toBeInTheDocument();
        expect(screen.getByText(description)).toBeInTheDocument();
        expect(screen.getByText(`${stars}`)).toBeInTheDocument();
    });

    it('renders a hyphen when stars are not provided', () => {
        render(<RepoInfo name={name} description={description} />);
        expect(screen.getByText('-')).toBeInTheDocument();
    });

    it('renders 0 when stars are 0', () => {
        render(<RepoInfo name="Example" description={description} stars={0} />);
        expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('renders the number of stars formatted using the runtime locale (default: en-US)', () => {
        render(
            <RepoInfo name="Example" description={description} stars={10000} />,
        );
        expect(screen.getByText('10,000')).toBeInTheDocument();
    });
});
