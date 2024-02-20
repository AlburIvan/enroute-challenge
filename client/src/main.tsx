import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import NiceModal from '@ebay/nice-modal-react';
import Body from './components/app-content.tsx';
import Header from './components/header.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NiceModal.Provider>
      <Header />
      <Body />
    </NiceModal.Provider>
  </React.StrictMode>
);
