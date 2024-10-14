import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, IconButton } from '@mui/material';
import { lightTheme, darkTheme } from '../../theme'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeToggle = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <IconButton
        style={{ position: 'fixed', bottom: 10, right: 10 }}
        onClick={handleThemeChange}
        color="inherit"
      >
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
      {children}
    </ThemeProvider>
  );
};

export default ThemeToggle;