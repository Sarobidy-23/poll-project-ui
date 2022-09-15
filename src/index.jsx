import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataProvider } from './context/ApiContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataProvider>
);


