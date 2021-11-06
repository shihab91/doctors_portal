import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Container, Typography } from '@mui/material';
const AppointmentBanner = () => {
  const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: "rgba(45,58,74,0.8)",
    backgroundBlendMode: "darken, luminosity",
    marginTop: 150,
  }
  return (
    <Box sx={{ flexGrow: 1 }} style={appointmentBanner}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <img src={doctor} style={{ marginTop: "-135px", width: "100%" }} alt="" />
          </Grid>
          <Grid item xs={12} md={7} sx={{ textAlign: "left", my: "auto" }}>
            <Typography variant="h6" style={{ color: "#40c5c5", marginBottom: "15px" }}>
              APPOINTMENT
            </Typography>
            <Typography variant="h4" style={{ color: 'white' }}>
              Make an APPOINTMENT today
            </Typography>
            <Typography variant="h6" sx={{ my: 3 }} style={{ color: "white", fontSize: "16px", fontWeight: 300 }}>
              It is a long established fact aht a reader will be distractedly the readable content of a page when looking at its
            </Typography>
            <Button variant="contained" sx={{ borderRadius: 0, my: 2 }} className="btnStyle">Learn More</Button>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentBanner;