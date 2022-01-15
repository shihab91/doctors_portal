import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointments/AvailableAppointment';
import Footer from "../../Shared/Footer/Footer"
import bg from "../../../../src/images/bg.png";
import "./Appointment.css";
import { Box } from "@mui/system";
const Appointment = () => {
  const [date, setDate] = React.useState(new Date());
  const bannerBg = {
    background: `  linear-gradient(90deg,transparent 75%,rgb(58,65,85)25%),url(${bg})`,
    paddingBottom: "150px",
  };
  return (
    <>
      <div style={bannerBg}>
        <Box sx={{ mb: 15 }}>
          <Navigation></Navigation>
        </Box>
        <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
      </div>
      <AvailableAppointment date={date}></AvailableAppointment>
      <Footer></Footer>
    </>
  );
};

export default Appointment;