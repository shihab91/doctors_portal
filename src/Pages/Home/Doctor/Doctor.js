import { Grid, Typography } from '@mui/material';
import React from 'react';

const Doctor = ({ doctor }) => {
  const { name, image } = doctor;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <img
        style={{ width: "200px", height: "310px" }}
        src={`data:image/png;base64,${image}`}
        alt="img of a doctor"
      />
      <Typography
        variant="h6"
        sx={{ fontFamily: "var(--poppins-font)", fontWeight: 600, mt: 2 }}
      >
        {name}
      </Typography>
    </Grid>
  );
};

export default Doctor;