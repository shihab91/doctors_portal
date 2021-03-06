import { Card, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import John from "../../../images/people-1.png"
import Doe from "../../../images/people-2.png"
import niharika from "../../../images/people-3.png"
const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: '2 times of brush in a day can keep you healthy',
      description: 'It is a long established fact that by the readable content of a lot layout . The point',
      doctor: 'Dr. John ',
      date: '12 April 2019',
      image: John
    },
    {
      id: 2,
      title: 'The tooth cancer is taking a challenge',
      description: 'It is a long established fact that by the readable content of a lot layout . The point',
      doctor: 'Dr. Doe',
      date: '12 April 2019',
      image: Doe
    },
    {
      id: 3,
      title: '2 times of brush in a day can keep you healthy',
      description: 'It is a long established fact that by the readable content of a lot layout . The point',
      doctor: 'Dr. John Doe',
      date: '12 April 2019',
      image: niharika
    },
  ];
  return (
    <Container sx={{ my: 15 }}>
      <Box sx={{ flexGrow: 1 }} className="blog-section">
        <Typography
          variant="h6"
          color="var(--color)"
          sx={{ fontFamily: "var(--poppins-font)" }}
        >
          Our Blogs
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontFamily: "var(--poppins-font)", my: 4 }}
        >
          From Our Blog News
        </Typography>
      </Box>
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ pt: 5, pr: 0 }}>
        {blogs.map((blog) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={blog.id}
            sx={{
              textAlign: "left",
              gx: { xs: 0.1, md: 4 },
              pr: { xs: 0, md: 3 },
              fontFamily: "var(--poppins-font)",
            }}
          >
            <Box>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    boxShadow: 0,
                  }}
                >
                  <CardMedia
                    image={blog.image}
                    component="img"
                    style={{
                      width: "17%",
                    }}
                    alt="doctor's image"
                  />
                  <CardContent sx={{ pl: 4 }}>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      component="p"
                    >
                      {blog.doctor}
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{ fontSize: "14px" }}
                      color="textSecondary"
                      component="p"
                    >
                      {blog.date}
                    </Typography>
                  </CardContent>
                </Card>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      my: 2,
                      fontFamily: "var(--montserrat-font)",
                      fontWeight: 600,
                    }}
                  >
                    {blog.title}
                  </Typography>
                  <Typography variant="p">{blog.description}</Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blogs;