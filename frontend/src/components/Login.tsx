import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Box, Typography } from '@mui/material';
import { FaLock } from 'react-icons/fa';

const Login: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <FaLock style={{ fontSize: 40, marginBottom: '20px', color: '#3f51b5' }} />
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => loginWithRedirect()} 
        style={{ marginTop: '20px', padding: '10px 20px' }}
      >
        Login com Auth0
      </Button>
    </Box>
  );
};

export default Login;
