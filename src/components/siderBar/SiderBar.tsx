import React from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import Logo1 from '../../assets/Logo1.png';

interface SideBarProps {
  open: boolean;
  onClose: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ open, onClose }) => {
  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/Dashbord' },
    { text: 'Tarefas', icon: <AssignmentIcon />, path: '/task' },
    { text: 'Projetos', icon: <RoomPreferencesIcon />, path: '/project' },
    { text: 'Calendário', icon: <CalendarMonthIcon/>, path: '/calendar' },

  ];

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <img src={Logo1} style={{width: 250, height: 200}}/>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              component={Link}
              to={item.path}
              sx={{ textAlign: 'left' }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
