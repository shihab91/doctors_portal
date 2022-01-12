import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-garden-06025.herokuapp.com/doctors")
      .then(res => res.json())
      .then(data => setDoctors(data))
  }, [])
  return (
    <div>
      <h2>Our Doctors {doctors.length} </h2>
      <Container>
        <Grid container spacing={2}>
          {doctors.map(doctor => <Doctor doctor={doctor} key={doctor._id} />)}
        </Grid>
      </Container>
    </div>
  );
};

export default Doctors;