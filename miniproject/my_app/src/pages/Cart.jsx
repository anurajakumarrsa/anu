import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import {
  Box,
  Typography,
  List,
  ListItem,
  Button,
  Avatar,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  Stack
} from "@mui/material";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    if (!address) {
      alert("Please enter your delivery address.");
      return;
    }
    alert(`Order placed!\nPayment: ${paymentMethod === "cod" ? "Cash on Delivery" : "UPI"}\nAddress: ${address}`);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h4" sx={{ mb: 2, textAlign: "center", fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
        Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography textAlign="center">No items in cart!</Typography>
      ) : (
        <>
          <List>
            {cartItems.map((item) => (
              <ListItem
                key={item.id}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                  <Avatar
                    src={item.image}
                    alt={item.name}
                    sx={{ width: 80, height: 80, borderRadius: 2 }}
                    variant="square"
                  />
                  <Box>
                    <Typography fontWeight="bold">{item.name}</Typography>
                    <Typography variant="body2">₹{item.price} x {item.quantity}</Typography>
                  </Box>
                </Box>

                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ mt: { xs: 2, sm: 0 }, alignItems: "center" }}
                  flexWrap="wrap"
                  justifyContent="center"
                >
                  <Button variant="outlined" size="small" onClick={() => decreaseQty(item.id)}>-</Button>
                  <Typography>{item.quantity}</Typography>
                  <Button variant="outlined" size="small" onClick={() => increaseQty(item.id)}>+</Button>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </Stack>
              </ListItem>
            ))}
          </List>

          <Typography variant="h5" sx={{ mt: 4, textAlign: "center" }}>
            Total Amount: ₹{totalAmount}
          </Typography>

          {/* Delivery & Payment */}
          <Paper sx={{ mt: 4, p: { xs: 2, sm: 3 } }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Delivery Address</Typography>
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Enter your full address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              sx={{ mb: 3 }}
            />

            <Typography variant="h6" sx={{ mb: 2 }}>Payment Method</Typography>
            <RadioGroup
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <FormControlLabel value="cod" control={<Radio />} label="Cash on Delivery" />
              <FormControlLabel value="upi" control={<Radio />} label="UPI / Online Payment" />
            </RadioGroup>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3, py: 1.2, fontWeight: "bold" }}
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </Paper>
        </>
      )}
    </Box>
  );
};

export default Cart;
