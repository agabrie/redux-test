import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// added the following imports below for global state management using redux
import { store } from "./state/store"
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap the App with the react-redux provider to enable global state management */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

