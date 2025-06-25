// // import { useContext, useState } from "react";
// // import { CartContext } from "../context/CartContext";
// // import {
// //   Box,
// //   Typography,
// //   List,
// //   ListItem,
// //   Button,
// //   Avatar,
// //   TextField,
// //   RadioGroup,
// //   FormControlLabel,
// //   Radio,
// //   Paper,
// //   Stack
// // } from "@mui/material";

// // const Cart = () => {
// //   const { cartItems, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);
// //   const [address, setAddress] = useState("");
// //   const [paymentMethod, setPaymentMethod] = useState("cod");

// //   const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

// //   const handlePlaceOrder = () => {
// //     if (!address) {
// //       alert("Please enter your delivery address.");
// //       return;
// //     }
// //     alert(`Order placed!\nPayment: ${paymentMethod === "cod" ? "Cash on Delivery" : "UPI"}\nAddress: ${address}`);
// //   };

// //   return (
// //     <Box sx={{ p: { xs: 2, md: 4 } }}>
// //       <Typography variant="h4" sx={{ mb: 2, textAlign: "center", fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
// //         Cart
// //       </Typography>

// //       {cartItems.length === 0 ? (
// //         <Typography textAlign="center">No items in cart!</Typography>
// //       ) : (
// //         <>
// //           <List>
// //             {cartItems.map((item) => (
// //               <ListItem
// //                 key={item.id}
// //                 sx={{
// //                   display: "flex",
// //                   flexDirection: { xs: "column", sm: "row" },
// //                   justifyContent: "space-between",
// //                   alignItems: "center",
// //                   mb: 2,
// //                 }}
// //               >
// //                 <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
// //                   <Avatar
// //                     src={item.image}
// //                     alt={item.name}
// //                     sx={{ width: 80, height: 80, borderRadius: 2 }}
// //                     variant="square"
// //                   />
// //                   <Box>
// //                     <Typography fontWeight="bold">{item.name}</Typography>
// //                     <Typography variant="body2">₹{item.price} x {item.quantity}</Typography>
// //                   </Box>
// //                 </Box>

// //                 <Stack
// //                   direction="row"
// //                   spacing={1}
// //                   sx={{ mt: { xs: 2, sm: 0 }, alignItems: "center" }}
// //                   flexWrap="wrap"
// //                   justifyContent="center"
// //                 >
// //                   <Button variant="outlined" size="small" onClick={() => decreaseQty(item.id)}>-</Button>
// //                   <Typography>{item.quantity}</Typography>
// //                   <Button variant="outlined" size="small" onClick={() => increaseQty(item.id)}>+</Button>
// //                   <Button
// //                     variant="outlined"
// //                     color="error"
// //                     size="small"
// //                     onClick={() => removeFromCart(item.id)}
// //                   >
// //                     Remove
// //                   </Button>
// //                 </Stack>
// //               </ListItem>
// //             ))}
// //           </List>

// //           <Typography variant="h5" sx={{ mt: 4, textAlign: "center" }}>
// //             Total Amount: ₹{totalAmount}
// //           </Typography>

// //           {/* Delivery & Payment */}
// //           <Paper sx={{ mt: 4, p: { xs: 2, sm: 3 } }}>
// //             <Typography variant="h6" sx={{ mb: 2 }}>Delivery Address</Typography>
// //             <TextField
// //               fullWidth
// //               multiline
// //               rows={3}
// //               placeholder="Enter your full address"
// //               value={address}
// //               onChange={(e) => setAddress(e.target.value)}
// //               sx={{ mb: 3 }}
// //             />

// //             <Typography variant="h6" sx={{ mb: 2 }}>Payment Method</Typography>
// //             <RadioGroup
// //               value={paymentMethod}
// //               onChange={(e) => setPaymentMethod(e.target.value)}
// //             >
// //               <FormControlLabel value="cod" control={<Radio />} label="Cash on Delivery" />
// //               <FormControlLabel value="upi" control={<Radio />} label="UPI / Online Payment" />
// //             </RadioGroup>

// //             <Button
// //               variant="contained"
// //               color="primary"
// //               fullWidth
// //               sx={{ mt: 3, py: 1.2, fontWeight: "bold" }}
// //               onClick={handlePlaceOrder}
// //             >
// //               Place Order
// //             </Button>
// //           </Paper>
// //         </>
// //       )}
// //     </Box>
// //   );
// // };

// // export default Cart;





// import { useContext, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import {
//   Box,
//   Typography,
//   List,
//   ListItem,
//   Button,
//   Avatar,
//   TextField,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Paper,
//   Stack
// } from "@mui/material";

// const Cart = () => {
//   const { cartItems, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);
//   const [address, setAddress] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("cod");

//   const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const handlePlaceOrder = () => {
//     if (!address) {
//       alert("Please enter your delivery address.");
//       return;
//     }
//     alert(`Order placed!\nPayment: ${paymentMethod === "cod" ? "Cash on Delivery" : "UPI"}\nAddress: ${address}`);
//   };

//   return (
//     <Box sx={{ p: { xs: 2, md: 4 } }}>
//       <Typography variant="h4" sx={{ mb: 2, textAlign: "center", fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
//         Cart
//       </Typography>

//       {cartItems.length === 0 ? (
//         <Typography textAlign="center">No items in cart!</Typography>
//       ) : (
//         <>
//           <List>
//             {cartItems.map((item) => (
//               <ListItem
//                 key={item.id}
//                 sx={{
//                   display: "flex",
//                   flexDirection: { xs: "column", sm: "row" },
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   mb: 2,
//                 }}
//               >
//                 <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
//                   <Box sx={{ width: 100, height: 100, flexShrink: 0 }}>
//                     <Avatar
//                       src={item.image}
//                       alt={item.name}
//                       variant="square"
//                       sx={{
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                         borderRadius: 2
//                       }}
//                     />
//                   </Box>
//                   <Box>
//                     <Typography fontWeight="bold">{item.name}</Typography>
//                     <Typography variant="body2">₹{item.price} x {item.quantity}</Typography>
//                   </Box>
//                 </Box>

//                 <Stack
//                   direction="row"
//                   spacing={1}
//                   sx={{ mt: { xs: 2, sm: 0 }, alignItems: "center" }}
//                   flexWrap="wrap"
//                   justifyContent="center"
//                 >
//                   <Button variant="outlined" size="small" onClick={() => decreaseQty(item.id)}>-</Button>
//                   <Typography>{item.quantity}</Typography>
//                   <Button variant="outlined" size="small" onClick={() => increaseQty(item.id)}>+</Button>
//                   <Button
//                     variant="outlined"
//                     color="error"
//                     size="small"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     Remove
//                   </Button>
//                 </Stack>
//               </ListItem>
//             ))}
//           </List>

//           <Typography variant="h5" sx={{ mt: 4, textAlign: "center" }}>
//             Total Amount: ₹{totalAmount}
//           </Typography>

//           {/* Delivery & Payment */}
//           <Paper sx={{ mt: 4, p: { xs: 2, sm: 3 } }}>
//             <Typography variant="h6" sx={{ mb: 2 }}>Delivery Address</Typography>
//             <TextField
//               fullWidth
//               multiline
//               rows={3}
//               placeholder="Enter your full address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               sx={{ mb: 3 }}
//             />

//             <Typography variant="h6" sx={{ mb: 2 }}>Payment Method</Typography>
//             <RadioGroup
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             >
//               <FormControlLabel value="cod" control={<Radio />} label="Cash on Delivery" />
//               <FormControlLabel value="upi" control={<Radio />} label="UPI / Online Payment" />
//             </RadioGroup>

//             <Button
//               variant="contained"
//               color="primary"
//               fullWidth
//               sx={{ mt: 3, py: 1.2, fontWeight: "bold" }}
//               onClick={handlePlaceOrder}
//             >
//               Place Order
//             </Button>
//           </Paper>
//         </>
//       )}
//     </Box>
//   );
// };

// export default Cart;











// import { useContext, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import {
//   Box,
//   Typography,
//   List,
//   ListItem,
//   Button,
//   TextField,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Paper,
//   Stack
// } from "@mui/material";

// const Cart = () => {
//   const { cartItems, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);
//   const [address, setAddress] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("cod");

//   const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const handlePlaceOrder = () => {
//     if (!address) {
//       alert("Please enter your delivery address.");
//       return;
//     }
//     alert(`Order placed!\nPayment: ${paymentMethod === "cod" ? "Cash on Delivery" : "UPI"}\nAddress: ${address}`);
//   };

//   return (
//     <Box sx={{ p: { xs: 2, md: 4 } }}>
//       <Typography
//         variant="h4"
//         sx={{ mb: 2, textAlign: "center", fontSize: { xs: "1.8rem", md: "2.5rem" } }}
//       >
//         Cart
//       </Typography>

//       {cartItems.length === 0 ? (
//         <Typography textAlign="center">No items in cart!</Typography>
//       ) : (
//         <>
//           <List>
//             {cartItems.map((item) => (
//               <ListItem
//                 key={item.id}
//                 sx={{
//                   display: "flex",
//                   flexDirection: { xs: "column", sm: "row" },
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   mb: 2,
//                   backgroundColor: "#f9f9f9",
//                   borderRadius: 2,
//                   p: 2,
//                   boxShadow: 1,
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 2,
//                     width: "100%",
//                   }}
//                 >
//                   {/* Consistent Image Box */}
//                   <Box
//                     sx={{
//                       width: 100,
//                       height: 100,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       borderRadius: 2,
//                       overflow: "hidden",
//                       backgroundColor: "#fff",
//                       border: "1px solid #ccc",
//                       flexShrink: 0,
//                     }}
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       style={{
//                         maxWidth: "100%",
//                         maxHeight: "100%",
//                         objectFit: "contain",
//                       }}
//                     />
//                   </Box>

//                   <Box>
//                     <Typography fontWeight="bold">{item.name}</Typography>
//                     <Typography variant="body2">
//                       ₹{item.price} x {item.quantity}
//                     </Typography>
//                   </Box>
//                 </Box>

//                 <Stack
//                   direction="row"
//                   spacing={1}
//                   sx={{ mt: { xs: 2, sm: 0 }, alignItems: "center" }}
//                   flexWrap="wrap"
//                   justifyContent="center"
//                 >
//                   <Button variant="outlined" size="small" onClick={() => decreaseQty(item.id)}>
//                     -
//                   </Button>
//                   <Typography>{item.quantity}</Typography>
//                   <Button variant="outlined" size="small" onClick={() => increaseQty(item.id)}>
//                     +
//                   </Button>
//                   <Button
//                     variant="outlined"
//                     color="error"
//                     size="small"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     Remove
//                   </Button>
//                 </Stack>
//               </ListItem>
//             ))}
//           </List>

//           <Typography variant="h5" sx={{ mt: 4, textAlign: "center" }}>
//             Total Amount: ₹{totalAmount}
//           </Typography>

//           {/* Delivery & Payment */}
//           <Paper sx={{ mt: 4, p: { xs: 2, sm: 3 } }}>
//             <Typography variant="h6" sx={{ mb: 2 }}>
//               Delivery Address
//             </Typography>
//             <TextField
//               fullWidth
//               multiline
//               rows={3}
//               placeholder="Enter your full address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               sx={{ mb: 3 }}
//             />

//             <Typography variant="h6" sx={{ mb: 2 }}>
//               Payment Method
//             </Typography>
//             <RadioGroup
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             >
//               <FormControlLabel value="cod" control={<Radio />} label="Cash on Delivery" />
//               <FormControlLabel value="upi" control={<Radio />} label="UPI / Online Payment" />
//             </RadioGroup>

//             <Button
//               variant="contained"
//               color="primary"
//               fullWidth
//               sx={{ mt: 3, py: 1.2, fontWeight: "bold" }}
//               onClick={handlePlaceOrder}
//             >
//               Place Order
//             </Button>
//           </Paper>
//         </>
//       )}
//     </Box>
//   );
// };

// export default Cart;



import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {
  Box,
  Typography,
  Button,
  Divider,
} from "@mui/material";

const Cart = () => {
  const {
    cartItems,
    savedItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    saveForLater,
    moveToCart,
  } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box sx={{ p: 3, display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3 }}>
      
      {/* LEFT: Cart Items */}
      <Box sx={{ flex: 3 }}>
        <Typography variant="h5" gutterBottom>Shopping Cart</Typography>
        <Divider sx={{ mb: 2 }} />

        {cartItems.length === 0 ? (
          <Typography>Your cart is empty.</Typography>
        ) : (
          cartItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                mb: 2,
                p: 2,
                border: "1px solid #ddd",
                borderRadius: 2,
                gap: 2,
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  width: 100,
                  height: 100,
                  objectFit: "contain",
                  border: "1px solid #eee",
                  borderRadius: 1,
                  backgroundColor: "#fafafa",
                }}
              />

              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.category}
                </Typography>
                <Typography sx={{ my: 1 }}>
                  Price: ₹{item.price.toLocaleString()}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Button size="small" onClick={() => decreaseQty(item.id)}>-</Button>
                  <Typography>{item.quantity}</Typography>
                  <Button size="small" onClick={() => increaseQty(item.id)}>+</Button>
                </Box>

                <Box sx={{ mt: 1 }}>
                  <Button
                    variant="text"
                    color="error"
                    size="small"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                  <Button
                    variant="text"
                    size="small"
                    onClick={() => saveForLater(item.id)}
                  >
                    Save for Later
                  </Button>
                </Box>
              </Box>
            </Box>
          ))
        )}

        {/* Saved for Later Section */}
        {savedItems.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6">Saved for Later</Typography>
            <Divider sx={{ my: 1 }} />
            {savedItems.map((item) => (
              <Box key={item.id} sx={{ display: "flex", gap: 2, my: 2 }}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{ width: 80, height: 80, objectFit: "contain" }}
                />
                <Box>
                  <Typography>{item.name}</Typography>
                  <Typography>₹{item.price.toLocaleString()}</Typography>
                  <Button size="small" onClick={() => moveToCart(item.id)}>Move to Cart</Button>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>

      {/* RIGHT: Summary */}
      <Box
        sx={{
          flex: 1,
          p: 2,
          border: "1px solid #ddd",
          borderRadius: 2,
          height: "fit-content",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography variant="h6">Order Summary</Typography>
        <Typography sx={{ my: 1 }}>
          Items: {cartItems.length}
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Subtotal: ₹{total.toLocaleString()}
        </Typography>
        <Button
          variant="contained"
          color="warning"
          fullWidth
          onClick={() => navigate("/checkout")}
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;

