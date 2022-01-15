import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "8.00 AM - 9.00 AM",
    space: 10,
    price: 15,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "10.05 AM - 11.00 AM",
    space: 10,
    price: 19
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "5.00 PM - 6.00 PM",
    space: 10,
    price: 18
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "7.00 AM - 8.30 AM",
    space: 5,
    price: 23
  },
  {
    id: 5,
    name: "Teeth Orthodontics",
    time: "8.00 AM - 9.00 AM",
    space: 10,
    price: 9
  },
  {
    id: 6,
    name: "Oral surgery",
    time: "8.00 AM - 9.00 AM",
    space: 10,
    price: 22
  }
]
const AvailableAppointment = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false)

  return (
    <Container sx={{ my: 20 }}>
      <Typography
        variant="h4"
        sx={{
          color: "#40c5c5",
          mb: 5,
          fontFamily: "var(--montserrat-font)",
          fontWeight: 600,
        }}
      >
        Available Appointments on {date.toDateString()}
      </Typography>
      {bookingSuccess && (
        <Alert sx={{ my: 4 }} severity="success">
          Appointment Booked Successfully
        </Alert>
      )}
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking
            key={booking.id}
            booking={booking}
            date={date}
            setBookingSuccess={setBookingSuccess}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;