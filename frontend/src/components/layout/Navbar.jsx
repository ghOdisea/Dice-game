import { AppBar, Toolbar, Typography } from '@mui/material';
import Login from '../Players/Login';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} >
          Rolling Dices Game
        </Typography>
        <Login />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;