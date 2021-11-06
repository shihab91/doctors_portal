import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import footerBg from "../../../images/footer-bg.png"
import "./Footer.css"
import { GrFacebookOption, GrGooglePlus, GrTwitter } from "react-icons/gr";

const Footer = () => {
  const FooterBg = {
    background: `url(${footerBg})`
  }
  return (
    <Box sx={{ flexGrow: 1 }} style={FooterBg}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} md={3} >
              <Box>
                <ul className="list-Container">
                  <Typography sx={{ mt: 7 }}>Emergency Dental Care</Typography>
                  <li>Check Up</li>
                  <li>Treatment of personal diseases</li>
                  <li>Tooth Extraction</li>
                  <li>Check Up</li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
              <Box>
                <ul className="list-Container">
                  <Typography variant="h6" color="#40c5c5">Services</Typography>
                  <li>Emergency Dental Care</li>
                  <li>Check Up</li>
                  <li>Treatment of personal diseases</li>
                  <li>Tooth Extraction</li>
                  <li>Check Up</li>
                  <li>Check Up</li>
                  <li>Check Up</li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
              <Box>
                <ul className="list-Container">
                  <Typography variant="h6" color="#40c5c5">Our Health</Typography>
                  <li>Emergency Dental Care</li>
                  <li>Check Up</li>
                  <li>Treatment of personal diseases</li>
                  <li>Tooth Extraction</li>
                  <li>Check Up</li>
                  <li>Check Up</li>
                  <li>Check Up</li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
              <Box>
                <ul className="list-Container">
                  <Typography variant="h6" color="var(--color)">Our Address</Typography>
                  <li>New York -101020 Hudson Yards</li>
                  <div className="icons">
                    <GrFacebookOption />
                    <GrGooglePlus />
                    <GrTwitter />
                  </div>
                  <li >Call Now</li>
                  <Button variant="contained" className="btnStyle" sx={{ float: "left", mb: 4 }}>01914608395</Button>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;