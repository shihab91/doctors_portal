import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { registerUser, isLoading, user, error } = useAuth();
  const history = useHistory();
  const location = useHistory();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData, [field]: value };
    console.log(newLoginData);
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Passwords do not match");
    }
    registerUser(loginData.email, loginData.password, loginData.name, location, history);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 30 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && <form action="" onSubmit={handleLoginSubmit}>
            <TextField
              id="standard-basic"
              name="name"
              type="name"
              onBlur={handleOnBlur}
              label="Your Name"
              sx={{ width: "75%", m: 2 }}
              variant="standard"
            />
            <TextField
              id="standard-basic"
              name="email"
              type="email"
              onBlur={handleOnBlur}
              label="Your Email"
              sx={{ width: "75%", m: 2 }}
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="password"
              name="password"
              onBlur={handleOnBlur}
              type="password"
              sx={{ width: "75%", m: 2 }}
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Retype your password"
              name="password2"
              onBlur={handleOnBlur}
              type="password"
              sx={{ width: "75%", m: 2 }}
              variant="standard"
            />
            <Button
              className="btnStyle"
              variant="contained"
              sx={{ width: "75%", m: 2 }}
              type="submit"
            >
              Register
            </Button>
            <NavLink
              to="/login"
              style={{ textDecoration: "none", color: "#40c5c5" }}
            >
              <Button variant="text">Already Registered?Please Login</Button>
            </NavLink>
          </form>}
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">user Created Successfully</Alert>}
          {error && <Alert severity="error">{error}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
