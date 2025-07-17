import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './auth/keycloak';
import ThemeContextProvider from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
  <ReactKeycloakProvider authClient={keycloak}>
    <Provider store={store}>
      <App />
    </Provider>
  </ReactKeycloakProvider>
  </ThemeContextProvider>
);
