import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Navigation = () => {
  const { user, logOutUser } = useAuth();
  console.log(user);
  const activeStyle = {
    color: "#8AFFCC",
  }
  const style = {
    textDecoration: "none",
    color: "white"
  }
  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors Portal
          </Typography>
          <NavLink style={style} to="/home" activeStyle={activeStyle}>
            <Button color="inherit">home</Button>
          </NavLink>
          <NavLink style={style} activeStyle={activeStyle} to="/appointment">
            <Button color="inherit">Appointment</Button>
          </NavLink>
          {user?.email ?
            <Box>
              <NavLink style={style} activeStyle={activeStyle} to="/dashboard">
                <Button color="inherit">Dashboard</Button>
              </NavLink>
              <Button color="inherit" variant="contained" className="btnStyle" onClick={logOutUser}>Log Out</Button>
            </Box>
            :
            <NavLink style={style} activeStyle={activeStyle} to="/login">
              <Button color="inherit">Log In</Button>
            </NavLink>
          }

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;