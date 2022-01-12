import { Grid } from "@mui/material";
import React from "react";
import Calendar from "../../Shared/Calendar/Calendar";
import Appointments from "../Appointments/Appointments";

const DashboardHome = ({ date, setDate }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={4}>
        <Calendar date={date} setDate={setDate} />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Appointments date={date}></Appointments>
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
