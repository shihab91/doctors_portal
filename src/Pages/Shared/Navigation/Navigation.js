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
import { Container } from '@mui/material';
const Navigation = () => {
  const { user, logOutUser } = useAuth();
  const activeStyle = {
    color: "#8AFFCC",
  }
  const style = {
    textDecoration: "none",
    color: "white",
    margin: ' 0 10px'

  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
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
                <Button color="inherit" style={style}>{user?.displayName}</Button>
                <Button color="inherit" variant="contained" className="btnStyle" onClick={logOutUser}>Log Out</Button>
              </Box>
              :
              <NavLink style={style} activeStyle={activeStyle} to="/login">
                <Button color="inherit">Log In</Button>
              </NavLink>
            }

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navigation;