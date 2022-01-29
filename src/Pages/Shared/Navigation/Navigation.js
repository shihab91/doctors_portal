import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Container, Toolbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./navigation.css";
const Navigation = () => {
  const { user, logOutUser } = useAuth();
  const style = {
    textDecoration: "none",
    margin: " 0 10px",
  };
  const toggleBtn = {
    fontSize: "40px",
    cursor: "pointer",
  };
  const [isActive, setIsActive] = useState(false);
  const handleToggleBtn = () => {
    setIsActive(!isActive);
  };
  return (
    <Box sx={{ flexGrow: 1, pt: 5 }}>
      <AppBar position="static" className="navigation-bar">
        <Container
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <Box
            sx={{
              color: "black",
              display: { sm: "block", md: "none" },
              position: "absolute",
              top: 30,
              right: 20,
            }}
            onClick={handleToggleBtn}
          >
            {isActive ? (
              <CloseIcon style={toggleBtn} className="toggle-button" />
            ) : (
              <MenuIcon style={toggleBtn} className="toggle-button" />
            )}
          </Box>
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
              style={{
                textDecoration: "none",
                color: "#551a8b",
                float: "left",
              }}
              to="/"
            >
              Logo
            </NavLink>
          </Typography>
          <Box
            className={`nav-links ${isActive ? "active" : ""}`}
            sx={{ display: { xs: "none", md: "initial" } }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <NavLink style={style} to="/home">
                <Button>Home</Button>
              </NavLink>
              <NavLink style={style} to="/appointment">
                <Button>Appointment</Button>
              </NavLink>
              {user?.email ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <NavLink style={style} to="/dashboard">
                    <Button>Dashboard</Button>
                  </NavLink>
                  <Button style={style}>{user?.displayName}</Button>
                  <Button
                    variant="contained"
                    className="btnStyle"
                    onClick={logOutUser}
                    sx={{
                      mt: 2,
                    }}
                  >
                    Log Out
                  </Button>
                </Box>
              ) : (
                <NavLink style={style} to="/login">
                  <Button>Log In</Button>
                </NavLink>
              )}
            </Box>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navigation;
