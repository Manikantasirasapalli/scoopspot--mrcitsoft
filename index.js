import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Main_page from './components/Main_page';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Main_page />
  </React.StrictMode>
);

