import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#1111',
        },
        info: {
          main: '#831f0f',
        },
      },
  });
  
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#9c27b0',
        },
        info: {
          main: '#831f0f',
        },
      },
});