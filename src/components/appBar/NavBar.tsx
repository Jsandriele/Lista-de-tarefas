import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo2 from '../../assets/logo2.png';
import AvatarBar from './AvatarBar';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import SideBar from '../siderBar/SiderBar';

const color = grey[800]
export const NavBar = () => {
  const navigate = useNavigate()
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);


  const handlerNavigate = () => {
    navigate('/')
  }
 
 const handleSideBarOpen = () => {
  setIsSideBarOpen(true);
};

const handleSideBarClose = () => {
  setIsSideBarOpen(false);
};  

  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="static" style={{ backgroundColor: color }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleSideBarOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={Logo2} alt="Logo" style={{ width: 100, height: 30 }} />
          </Typography>
          <Button color="inherit" onClick={handlerNavigate}>Login</Button>
          <IconButton>
            <AvatarBar />
          </IconButton>
        </Toolbar>
        <SideBar open={isSideBarOpen} onClose={handleSideBarClose} />
      </AppBar>
    </Box>
  );
}