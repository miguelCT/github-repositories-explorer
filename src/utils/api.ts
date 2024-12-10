import { Octokit } from '@octokit/rest';

const api = new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN,
});

export default api;
