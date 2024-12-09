import App from 'pages/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { QueryClientProvider } from 'react-query';
import queryClient from 'utils/queryClient';

import { BrowserRouter } from 'react-router';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>,
);
