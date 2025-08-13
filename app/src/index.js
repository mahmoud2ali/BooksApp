import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import { FavoritesProvider } from './context/FavoritesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<FavoritesProvider>
    <React.StrictMode>
          <App />
    </React.StrictMode>
</FavoritesProvider>
);

