import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import treatment from "../../../images/treatment.png"
const Exceptional = () => {
  return (
    <Container sx={{ my: 8 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <img style={{ width: '80%' }} src={treatment} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
          <Typography variant="h4" sx={{ mb: 6, fontWeight: 500 }}>
            Exceptional Dental <br /> Care , On Your Terms
          </Typography>
          <Typography variant="p" sx={{ letterSpacing: 1, lineHeight: 1.8, wordSpacing: 1 }} color="text.secondary">
            Nearly all people understand the importance of having a clean and beautiful smile. To some patients, a smile could be an extension of a joyful disposition. Meanwhile, others might think of it as a tool to indicate happiness as they're surrounded by their loved ones. With a smile that is both clean and aesthetically pleasing, attaining an improved quality of life can be much easier.
          </Typography>
          <Button className="btnStyle" variant="contained" sx={{ display: 'block', mt: 8, color: "white", p: 1.1, px: 3 }}>Learn More</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Exceptional;