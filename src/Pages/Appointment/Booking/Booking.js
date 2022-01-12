import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from "../BookingModal/BookingModal"
const Booking = ({ booking, date, setBookingSuccess }) => {
  const { name, time, space, price } = booking;
  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 6 }}>
          <Typography variant="h5" sx={{ color: "#40c5c5" }} gutterBottom>
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {time}
          </Typography>
          <Typography variant="caption" gutterBottom display="block">
            Price ${price}
          </Typography>
          <Typography variant="caption" gutterBottom display="block">
            {space} SPACES AVAILABLE
          </Typography>
          <Button variant="contained" onClick={handleBookingOpen} className="btnStyle">BOOK APPOINTMENTS</Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        booking={booking}
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;