import { Card, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Winson from "../../../images/people-1.png"
import gaga from "../../../images/people-2.png"
import niharika from "../../../images/people-3.png"
const Testimonial = () => {
  const testimonial = [
    {
      id: 1,
      name: 'Winson Harry',
      location: "california",
      description: "It is a long established fact that by the readable content of a lot layout . The point of using gLorem a more-or-less normal distribute to using . ",
      image: Winson
    },
    {
      id: 2,
      name: 'lady gaga',
      location: "New York",
      description: "It is a long established fact that by the readable content of a lot layout . The point of using gLorem a more-or-less normal distribute to using . ",
      image: gaga
    },
    {
      id: 3,
      name: 'niharika',
      location: "Dhaka",
      description: "It is a long established fact that by the readable content of a lot layout . The point of using gLorem a more-or-less normal distribute to using . ",
      image: niharika
    }
  ]
  return (
    <Container sx={{ textAlign: 'left', my: 8 }}>
      <Box sx={{ ml: 3 }}>
        <Typography variant="h6" sx={{ color: "#40c5c5" }}>
          TESTIMONIAL
        </Typography>
        <Typography variant="h3" sx={{ fontSize: "40px" }} >
          What's Our Patient <br /> Says
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={{ xs: 2, md: 3 }} style={{ margin: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            testimonial.map(item => {
              return (
                <Grid item key={item.id} xs={4} sm={4} md={4} sx={{ gx: 4, pr: 3 }}>
                  <Paper elevation={3}>
                    <Box p={3}>
                      <Typography variant="p" sx={{ fontSize: "16px", color: "text.secondary", pt: 4 }}>
                        {item.description}
                      </Typography>
                      <Card sx={{ boxShadow: 0, mt: 6, mb: 2, display: "flex", alignItems: "center", flexDirection: "row" }}>
                        <CardMedia
                          component="img"
                          style={{ width: "17%" }}
                          image={item.image}
                          alt="mans image"
                        />
                        <Box sx={{ ml: 3 }}>
                          <Typography variant="h6" sx={{ fontSize: "16px", color: "#40c5c5" }}>
                            {item.name}
                          </Typography>
                          <Typography variant="p" sx={{ fontSize: "14px", ml: 1, color: "text.secondary" }}>
                            {item.location}
                          </Typography>
                        </Box>
                      </Card>
                    </Box>
                  </Paper>
                </Grid>
              )
            })
          }
        </Grid>
      </Box>
    </Container >
  );
};

export default Testimonial;