import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Container } from "@mui/material";
import "./navigation.css";
const Navigation = () => {
  const { user, logOutUser } = useAuth();
  const style = {
    textDecoration: "none",
    margin: " 0 10px",
  };
  return (
    <Box sx={{ flexGrow: 1, pt: 5 }}>
      <AppBar position="static" className="navigation-bar">
        <Container>
          <Toolbar sx={{ px: 0 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: "var(--moo-lah-font)",
                letterSpacing: 2,
                fontWeight: "bold",
                fontSize: 35,
                cursor: "pointer",
                mr: "auto",
              }}
            >
              <NavLink
                style={{ textDecoration: "none", color: "#551a8b" }}
                to="/"
              >
                Doctors Portal
              </NavLink>
            </Typography>
            <NavLink style={style} to="/home">
              <Button>Home</Button>
            </NavLink>
            <NavLink style={style} to="/appointment">
              <Button>Appointment</Button>
            </NavLink>
            {user?.email ? (
              <Box>
                <NavLink style={style} to="/dashboard">
                  <Button>Dashboard</Button>
                </NavLink>
                <Button style={style}>{user?.displayName}</Button>
                <Button
                  variant="contained"
                  className="btnStyle"
                  onClick={logOutUser}
                >
                  Log Out
                </Button>
              </Box>
            ) : (
              <NavLink style={style} to="/login">
                <Button>Log In</Button>
              </NavLink>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navigation;
