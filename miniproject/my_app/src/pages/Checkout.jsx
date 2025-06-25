import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    paymentMethod: "cod",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (
      form.name &&
      form.address &&
      form.city &&
      form.postalCode &&
      form.phone
    ) {
      // You can store this order to localStorage or backend here
      navigate("/order-success");
    } else {
      alert("Please fill all the shipping details.");
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h5" gutterBottom>
        Checkout
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* 🏠 Shipping Address */}
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>

      <TextField
        fullWidth
        label="Full Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Address"
        name="address"
        value={form.address}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="City"
        name="city"
        value={form.city}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Postal Code"
        name="postalCode"
        value={form.postalCode}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Phone Number"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        margin="normal"
      />

      <Divider sx={{ my: 3 }} />

      {/* 💳 Payment Method */}
      <Typography variant="h6" gutterBottom>
        Payment Method
      </Typography>
      <FormControl component="fieldset">
        <FormLabel>Select a method</FormLabel>
        <RadioGroup
          name="paymentMethod"
          value={form.paymentMethod}
          onChange={handleChange}
        >
          <FormControlLabel
            value="cod"
            control={<Radio />}
            label="Cash on Delivery"
          />
          <FormControlLabel
            value="card"
            control={<Radio />}
            label="Credit / Debit Card"
          />
          <FormControlLabel
            value="upi"
            control={<Radio />}
            label="UPI / Google Pay / PhonePe"
          />
        </RadioGroup>
      </FormControl>

      <Button
        variant="contained"
        color="success"
        sx={{ mt: 3 }}
        fullWidth
        onClick={handlePlaceOrder}
      >
        Place Order
      </Button>
    </Box>
  );
};

export default Checkout;
