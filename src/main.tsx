import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import RepositoriesExplorer from 'pages/RepositoriesExplorer';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Providers from 'Providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Providers>
            <RepositoriesExplorer />
        </Providers>
    </React.StrictMode>,
);
