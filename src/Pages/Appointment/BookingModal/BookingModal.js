import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const BookingModal = ({ setBookingSuccess, openBooking, handleBookingClose, booking, date }) => {
  const { name, time, price } = booking;
  const { user } = useAuth();
  const initialInfo = { patientName: user.displayName, email: user.email, phone: "" }
  const [bookingInfo, setBookingInfo] = useState(initialInfo);
  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo)
  }
  const handleBookSubmit = e => {
    // collect data from input fields
    const appointment = {
      ...bookingInfo,
      time,
      price,
      serviceName: name,
      date: date.toLocaleDateString()
    }
    fetch("https://aqueous-garden-06025.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(appointment)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleBookingClose();
        }
      })
    e.preventDefault();
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 1000,
      }}
      sx={{ border: "none" }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography id="transition-modal-title" sx={{ textAlign: 'center', fontWeight: 500, my: 2, color: "var(--color)" }} variant="h5" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleBookSubmit} style={{ marginLeft: "20px" }}>
            <TextField
              disabled
              sx={{ width: "90%", my: 1 }}
              defaultValue={time}
              id="outlined-size-small"
              size="small"
            />
            <TextField
              sx={{ width: "90%", my: 1 }}
              defaultValue={user.displayName}
              id="outlined-size-small"
              size="small"
              name="patientName"
              onBlur={handleOnBlur}
            />
            <TextField
              sx={{ width: "90%", my: 1 }}
              defaultValue={user.email}
              id="outlined-size-small"
              size="small"
              name="email"
              onBlur={handleOnBlur}
            />
            <TextField
              sx={{ width: "90%", my: 1 }}
              defaultValue="Phone Number"
              id="outlined-size-small"
              size="small"
              name="phone"
              onBlur={handleOnBlur}
            />
            <TextField
              disabled
              sx={{ width: "90%", my: 1 }}
              defaultValue={date.toDateString()}
              id="outlined-size-small"
              size="small"
            />
            <Button variant="contained" type="submit" className="btnStyle">Send</Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;