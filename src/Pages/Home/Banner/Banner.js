import React from 'react';
import chair from "../../../images/chair.png";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
const Banner = () => {
  return (
    <Box
      sx={{
        height: 700,
        pb: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ my: "auto" }}>
          <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
            <Typography
              variant="h3"
              sx={{
                mb: 4,
                fontFamily: "var(--montserrat-font)",
                fontWeight: 700,
              }}
            >
              Your New Smile <br /> Starts Here
            </Typography>
            <Typography
              variant="p"
              sx={{ fontFamily: "var(--poppins-font)", wordSpacing: 4 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              iusto ipsa at explicabo. Odit nemo provident unde nisi expedita,
              molestias quidem? Rerum, non. Maiores quis eius magnam autem
              expedita quisquam.
            </Typography>
            <Button
              variant="contained"
              sx={{ display: "block", borderRadius: 0, mt: 4 }}
              className="btnStyle"
            >
              GET APPOINTMENT
            </Button>
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