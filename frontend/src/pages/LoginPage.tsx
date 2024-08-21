import React from 'react';
import { Container, Paper, Typography, Box } from '@mui/material';
import Login from '../components/Login';

const LoginPage: React.FC = () => {
  return (
    <div style={{ 
      backgroundImage: 'url(https://source.unsplash.com/random/1600x900)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <Container maxWidth="sm">
        <Paper elevation={6} style={{ padding: '40px', borderRadius: '15px', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Bem-vindo(a) de Volta!
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Por favor, faça login para continuar.
          </Typography>
          <Box display="flex" justifyContent="center">
            <Login />
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default LoginPage;
