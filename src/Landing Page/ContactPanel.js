import React from 'react';
import { Box, Container, TextField, Button, Typography } from '@mui/material';
import './styles/ContactPanel.css';

const ContactPanel = () => {
  return (
    <Container className="contact-panel">
      <Box component="form" className="contact-form">
        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Message"
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </Box>
    </Container>
  );
}

export default ContactPanel;
