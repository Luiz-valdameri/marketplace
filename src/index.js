import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './contexts/auth';
import Routes from './routes';
import Theme from './theme/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Theme>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Theme>
  </React.StrictMode>
);

