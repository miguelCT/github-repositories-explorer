export type User = {
    id: number;
    username: string;
};

export type UserRepo = {
    userId: number;
    repoId: number;
    name: string;
    stars: number;
    description: string;
};
