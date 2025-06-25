// // src/pages/Women.jsx
// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import products from "../basicc.json";
// import womenBanner from "../assets/women.jpg"; // your women banner image
// import { Box, Grid, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

// const Women = () => {
//   const { addToCart } = useContext(CartContext);

//   const womenProducts = products.filter((item) => item.category === "Women");

//   return (
//     <Box>
//       {/* Top Banner */}
//       <Box
//         sx={{
//           width: "100%",
//           height: { xs: 200, md: 400 },
//           backgroundImage: `url(${womenBanner})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           mb: 4,
//         }}
//       >
//         <Box
//           sx={{
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0,0,0,0.4)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Typography
//             variant="h3"
//             sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
//           >
//             Graceful Watches for Every Woman
//           </Typography>
//         </Box>
//       </Box>

//       {/* Products Grid */}
//       <Box sx={{ p: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
//         <Typography
//           variant="h4"
//           sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}
//         >
          
//         </Typography>

//         <Grid container spacing={4}>
//           {womenProducts.map((product) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
//               <Card
//                 sx={{
//                   height: "100%",
//                   borderRadius: 4,
//                   boxShadow: 4,
//                   transition: "transform 0.3s, box-shadow 0.3s",
//                   "&:hover": {
//                     transform: "scale(1.05)",
//                     boxShadow: 8,
//                   },
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={product.image}
//                   alt={product.name}
//                   sx={{ objectFit: "cover", borderRadius: "16px 16px 0 0" }}
//                 />
//                 <CardContent>
//                   <Typography variant="h6" gutterBottom>
//                     {product.name}
//                   </Typography>
//                   <Typography variant="subtitle1" sx={{ mb: 2 }}>
//                     ₹{product.price}
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     sx={{
//                       borderRadius: "20px",
//                       textTransform: "none",
//                       fontWeight: "bold",
//                       backgroundColor: "#FF6F00",
//                       "&:hover": {
//                         backgroundColor: "#AD1457",
//                       },
//                     }}
//                     onClick={() => addToCart(product)}
//                   >
//                     Add to Cart
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default Women;



// src/pages/Women.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../basicc.json";
import womenBanner from "../assets/women.jpg";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button
} from "@mui/material";

const Women = () => {
  const { addToCart } = useContext(CartContext);
  const womenProducts = products.filter((item) => item.category === "Women");

  return (
    <Box>
      {/* Top Banner */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 200, md: 400 },
          backgroundImage: `url(${womenBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mb: 4,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            Graceful Watches for Every Woman
          </Typography>
        </Box>
      </Box>

      {/* Products Grid */}
      <Box sx={{ p: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
        <Grid container spacing={4}>
          {womenProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: 4,
                  boxShadow: 4,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 8,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    height: 200,
                    objectFit: "contain",
                    borderRadius: "16px 16px 0 0",
                    backgroundColor: "#fff"
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mb: 2 }}>
                    ₹{product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      borderRadius: "20px",
                      textTransform: "none",
                      fontWeight: "bold",
                      backgroundColor: "#FF6F00",
                      "&:hover": {
                        backgroundColor: "#AD1457",
                      },
                    }}
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Women;

