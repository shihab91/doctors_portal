import React from 'react';
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
const Banner = () => {
  const bannerBg = {
    background: `url(${bg})`
  }
  return (
    <Box style={bannerBg} sx={{ height: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container sx={{ flexGrow: 1 }} >
        <Grid container spacing={2} sx={{ my: "auto" }}>
          <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
            <Typography variant="h3" sx={{ mb: 4 }}>
              Your New Smile <br /> Starts Here
            </Typography>
            <Typography variant="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores iusto ipsa at explicabo. Odit nemo provident unde nisi expedita, molestias quidem? Rerum, non. Maiores quis eius magnam autem expedita quisquam.
            </Typography>
            <Button variant="contained" sx={{ display: "block", borderRadius: 0, mt: 2 }} className="btnStyle">GET APPOINTMENT</Button>
          </Grid>
          <Grid item xs={6} md={6}>
            <img style={{ width: "100%" }} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;