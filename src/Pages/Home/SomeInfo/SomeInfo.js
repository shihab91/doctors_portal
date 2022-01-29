import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./someInfo.css";
const SomeInfo = () => {
  return (
    <Container sx={{ mt: -12 }}>
      <Grid
        container
        style={{ margin: 0 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Grid item xs={4} sm={4} md={4} sx={{ gap: 5, m: 0 }}>
          <Card
            sx={{
              maxWidth: 345,
              mx: "auto",
              my: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "row",
              background: "#00c6c0",
              color: "#fff",
              py: 1,
            }}
            xs={12}
            md={4}
          >
            <CardMedia>
              <AccessTimeIcon sx={{ fontSize: "50px" }}></AccessTimeIcon>
            </CardMedia>
            <CardContent sx={{ ml: -10 }}>
              <Typography
                gutterBottom
                variant="h6"
                className="some-info-title"
                component="div"
              >
                Opening Hours
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: "var(--poppins-font)" }}
              >
                Lorem ipsum dolor sit amet
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} sx={{ gap: 5, m: 0 }}>
          <Card
            sx={{
              maxWidth: 345,
              mx: "auto",
              my: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "row",
              background: "#3a4155",
              color: "#fff",
              py: 1,
            }}
            xs={12}
            md={4}
          >
            <CardMedia>
              <FaMapMarkerAlt style={{ fontSize: "50px" }}></FaMapMarkerAlt>
            </CardMedia>
            <CardContent sx={{ ml: -10 }}>
              <Typography
                gutterBottom
                variant="h6"
                className="some-info-title"
                component="div"
              >
                Visit our location
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: "var(--poppins-font)" }}
              >
                Gazipur,Dhaka
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} sx={{ gap: 5, m: 0 }}>
          <Card
            sx={{
              maxWidth: 345,
              mx: "auto",
              my: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "row",
              background: "#00c6c0",
              color: "#fff",
              py: 1,
            }}
            xs={12}
            md={4}
          >
            <CardMedia>
              <HiOutlinePhoneMissedCall
                style={{ fontSize: "50px" }}
              ></HiOutlinePhoneMissedCall>
            </CardMedia>
            <CardContent sx={{ ml: -10 }}>
              <Typography
                gutterBottom
                variant="h6"
                sx={{ fontWeight: 600 }}
                className="some-info-title"
                component="div"
              >
                Contact us now
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: "var(--poppins-font)" }}
              >
                +0025,546,556
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SomeInfo;
