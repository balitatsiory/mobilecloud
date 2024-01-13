import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { EventEmitter } from 'events';
EventEmitter.defaultMaxListeners = 15; // Vous pouvez ajuster le nombre selon vos besoins


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);