import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Logout: React.FC = () => {
  const { logout } = useAuth0();

  return (
    <span onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Logout
    </span>
  );
};

export default Logout;
