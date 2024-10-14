import { Box, Typography,Container } from '@mui/material';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto'}} >
      <Container maxWidth="sm">
        <Typography>
          Made with <FavoriteTwoToneIcon /> by Gonzalo and Jordi
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
