import { Button, Container, TextField } from '@mui/material';
import React from 'react';
import bg2 from "../../../images/bg2.jpg"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const ContactUs = () => {
  const background = {
    background: `url(${bg2})`,
    backgroundColor: "rgba(45,58,74,0.8)",
    backgroundBlendMode: "darken, luminosity",
  }
  const contact = {
    background: "white",
    // width: "60%",
    outline: "none",
    marginTop: "25px",
    borderRadius: "5px",
    fontFamily: "var(--montserrat-font)",
  };
  return (
    <Box sx={{ flexGrow: 1 }} style={background}>
      <Container sx={{ my: 8, pt: 12, pb: 15 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "#40c5c5",
            fontFamily: "var(--poppins-font)",
            fontWeight: 600,
          }}
        >
          {" "}
          Contact Us
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ color: "#fff", fontFamily: "var(--poppins-font)" }}
        >
          Always Connect With Us
        </Typography>
        <form
          action=""
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="outlined-multiline-flexible"
            multiline
            maxRows={1}
            placeholder="Email Address*"
            style={contact}
            sx={{ width: { xs: "90%", md: "60%" } }}
          />
          <TextField
            id="outlined-multiline-flexible"
            multiline
            maxRows={1}
            placeholder="Subject*"
            style={contact}
            sx={{ width: { xs: "90%", md: "60%" } }}
          />
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={8}
            placeholder="Your Message*"
            style={contact}
            sx={{ width: { xs: "90%", md: "60%" } }}
          />
          <Button
            className="btnStyle"
            sx={{ mt: 4, color: "white", px: 6, py: 1, fontSize: "16px" }}
          >
            Submit
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default ContactUs;