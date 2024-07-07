import { createTheme } from "@mui/material";

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#2B2D42',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#E83F6F',
    },
    background: {
      default: '#F5F5F5',
    },
  },
  typography: {
    fontFamily: 'Open Sans Condensed, sans-serif',
  },
});


export default theme;