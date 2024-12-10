import App from 'pages/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';

import './index.css';

import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from 'utils/queryClient';

import { BrowserRouter } from 'react-router';
import { ThemeProvider } from '@emotion/react';
import theme from 'utils/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline>
                        <App />
                    </CssBaseline>
                </ThemeProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>,
);
