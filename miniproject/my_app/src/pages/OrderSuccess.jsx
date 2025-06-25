import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize"; // To auto fit screen

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { width, height } = useWindowSize(); // Get screen size

  return (
    <>
      <Confetti width={width} height={height} numberOfPieces={300} recycle={true} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Box
          sx={{
            p: 4,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CheckCircleOutline sx={{ fontSize: 80, color: "green", mb: 2 }} />
          <Typography variant="h4" gutterBottom>
            Order Placed Successfully!
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Thank you for shopping with <strong>WristWise</strong>. Your order is being processed.
          </Typography>
          <Button variant="contained" sx={{backgroundColor:"#FF6F00"}} onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </Box>
      </motion.div>
    </>
  );
};

export default OrderSuccess;
