import { type RestEndpointMethodTypes } from '@octokit/rest';

// Type shortcuts from the Github client library
type FullUserSearchItem =
    RestEndpointMethodTypes['search']['users']['response']['data']['items'][0];

export type UserSearchItem = Pick<FullUserSearchItem, 'login' | 'id'>;

export type UserRepo =
    RestEndpointMethodTypes['repos']['listForUser']['response']['data'][0];
