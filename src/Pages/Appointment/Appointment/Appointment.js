import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointments/AvailableAppointment';
import Footer from "../../Shared/Footer/Footer"
import { Box } from '@mui/system';
const Appointment = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <>
      <Box sx={{ mb: 8 }}>
        <Navigation></Navigation>
      </Box>
      <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
      <AvailableAppointment date={date}></AvailableAppointment>
      <Footer></Footer>
    </>
  );
};

export default Appointment;