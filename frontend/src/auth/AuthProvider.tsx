import React, { ReactNode } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const onRedirectCallback = (appState: any) => {
    window.history.replaceState(
      {},
      document.title,
      appState?.returnTo || window.location.pathname
    );
  };

  return (
    <Auth0Provider
      domain="dev-6rhdncncyn04rezu.us.auth0.com"
      clientId="sjZJx3a6T7ha3LNN5z1WSZwfn2TVYhbP"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/"
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;