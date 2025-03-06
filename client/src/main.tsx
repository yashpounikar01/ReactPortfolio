
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Ensure we have a single instance of React
window.React = React;

// Get the root element
const container = document.getElementById('root');

// Make sure it exists
if (!container) {
  throw new Error('Root element not found in the document');
}

// Create root and render
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
