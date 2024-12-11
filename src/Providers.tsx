import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { type FC, type PropsWithChildren } from 'react';

import './index.css';

import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from 'utils/queryClient';

import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router';
import theme from 'utils/theme';

const Providers: FC<PropsWithChildren> = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline>{children}</CssBaseline>
            </ThemeProvider>
        </BrowserRouter>
    </QueryClientProvider>
);

export default Providers;
