import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-garden-06025.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <Container>
      <div>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "var(--poppins-font)",
            fontWeight: 500,
            color: "var(--color)",
            mb: 8,
          }}
        >
          Our Doctors
        </Typography>
        <Grid container spacing={2}>
          {doctors.map((doctor) => (
            <Doctor doctor={doctor} key={doctor._id} />
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Doctors;
