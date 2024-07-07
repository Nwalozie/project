import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import './styles/Wrapper.css';

const Wrapper = () => {
  return (
    <Box className="wrapper">
      <Container className="middle-container">
        <Box className="background-div">
          <Typography variant="h1" className="welcome">
            Welcome to Financial Freedom
          </Typography>
          <Box className="catchy">
            <Typography variant="h2" className="catchy-text">
              Achieve Your Dreams
            </Typography>
            <Button variant="contained" className="sign-up-button">
              <span>Sign Up</span>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Wrapper;
