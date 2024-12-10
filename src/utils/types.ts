import { type RestEndpointMethodTypes } from '@octokit/rest';

// Type shortcuts from the Github client library
export type UserSearchItem =
    RestEndpointMethodTypes['search']['users']['response']['data']['items'][0];

export type UserRepo =
    RestEndpointMethodTypes['repos']['listForUser']['response']['data'][0];
