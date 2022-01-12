import { Alert, Button, Input, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddDoctor = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) return;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);
    fetch("https://aqueous-garden-06025.herokuapp.com/doctors", {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          setSuccess("doctor added successfully");
        }
      })
      .catch(err => console.log(err.message))
  }
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 15 }}>
      <form style={{ display: 'flex', flexDirection: 'column', width: "25%" }} action="" onSubmit={handleSubmit}>
        <TextField onChange={e => setName(e.target.value)} type="name" label="Name" required variant="standard" />
        <TextField onChange={e => setEmail(e.target.value)} type="email" label=" Email" required variant="standard" />
        <Input accept="image/*" id="contained-button-file" type="file" onChange={(e) => { setImage(e.target.files[0]) }} />
        <Button variant="contained" type="submit">
          Add Doctor
        </Button>
      </form>
      {success && <Alert severity="success">{success}</Alert>}
    </Box>
  );
};

export default AddDoctor;