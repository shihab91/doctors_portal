import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from "../../../images/login.png";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, LogInUser, isLoading, error, singInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleLoginSubmit = (e) => {
    LogInUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  }
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData, [field]: value };
    setLoginData(newLoginData);
  }
  const handleGoogleSingIn = () => {
    singInWithGoogle(location, history);
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 30 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>Login</Typography>
          <form action="" onSubmit={handleLoginSubmit}>
            <TextField id="standard-basic" name="email" onChange={handleOnChange} label="Your Email" sx={{ width: '75%', m: 2 }} variant="standard" />
            <TextField id="standard-basic" label="password" name="password" onChange={handleOnChange} type="password" sx={{ width: '75%', m: 2 }} variant="standard" />
            <Button className="btnStyle" variant="contained" sx={{ width: '75%', m: 2 }} type="submit">Login</Button>
            <NavLink to="/register" style={{ textDecoration: 'none', color: "#40c5c5" }}><Button variant="text">New User? Please Register</Button></NavLink>
            {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="success">Log in Successfully</Alert>}
            {error && <Alert severity="error">{error}</Alert>}
          </form>
          <p>----------------------</p>
          <Button onClick={handleGoogleSingIn} className="btnStyle" variant="contained" sx={{ width: '75%', m: 2 }} type="submit">Google Sing In</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;