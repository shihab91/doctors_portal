import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./service.css"
const Service = (props) => {
  const { name, image, description } = props.service;
  return (
    <Grid item xs={4} sm={4} md={4} sx={{ gap: 4 }}>
      <Card className="service-card" sx={{ minWidth: 275, boxShadow: 0, m: 2 }}>
        <CardMedia
          component="img"
          style={{ width: "auto", height: "70px", margin: "0 auto" }}
          image={image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            sx={{
              my: 2,
              fontWeight: 600,
              fontSize: 21,
              fontFamily: "var(--poppins-font)",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontFamily: "var(--montserrat-font)", fontSize: 16 }}
          >
            {description.slice(0, 150)}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;