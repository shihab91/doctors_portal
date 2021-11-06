import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
const Services = () => {

  const services = [
    {
      name: 'Fluoride Treatment',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem officia illum velit, perspiciatis voluptatem molestias iste optio aliquam? Dolor magnam blanditiis quidem',
      image: fluoride
    },
    {
      name: 'Cavity Filling',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem officia illum velit, perspiciatis voluptatem molestias iste optio aliquam? Dolor magnam blanditiis quidem',
      image: cavity
    },
    {
      name: 'Teeth Whitening',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem officia illum velit, perspiciatis voluptatem molestias iste optio aliquam? Dolor magnam blanditiis quidem',
      image: whitening
    }
  ]
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Typography variant="h6" sx={{ fontWeight: "bold", my: 2 }} style={{ color: "#40c5c5" }} component="div">
            OUR SERVICES
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }} component="div">
            Services we provide
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} style={{ margin: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {services.map((service) => <Service
              key={service.name}
              service={service}
            ></Service>
            )}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Services;