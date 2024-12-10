import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // We disable the automatic refetch on window focus. It can be enable more specifically in each query
            refetchOnWindowFocus: false,
        },
    },
});

export default queryClient;
