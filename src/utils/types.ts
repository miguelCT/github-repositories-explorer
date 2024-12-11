import { type RestEndpointMethodTypes } from '@octokit/rest';

// Type shortcuts from the Github client library
type FullUserSearchItem =
    RestEndpointMethodTypes['search']['users']['response']['data']['items'][0];

export type UserSearchItem = Pick<FullUserSearchItem, 'login' | 'id'>;

type FullUserRepo =
    RestEndpointMethodTypes['repos']['listForUser']['response']['data'][0];
export type UserRepo = Pick<
    FullUserRepo,
    'name' | 'id' | 'description' | 'stargazers_count'
>;
