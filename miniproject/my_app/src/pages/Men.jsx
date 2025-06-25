// // import { useContext } from "react";
// // import { CartContext } from "../context/CartContext";
// // import products from "../basicc.json";
// // import menBanner from "../assets/men.jpg";
// // import {
// //   Box,
// //   Grid,
// //   Card,
// //   CardContent,
// //   CardMedia,
// //   Typography,
// //   Button,
// // } from "@mui/material";
// // import { useLocation } from "react-router-dom";

// // const Men = () => {
// //   const { addToCart } = useContext(CartContext);
// //   const location = useLocation();
// //   const searchParams = new URLSearchParams(location.search);
// //   const searchQuery = searchParams.get("search")?.toLowerCase() || "";

// //   const menProducts = products.filter(
// //     (item) =>
// //       item.category === "Men" &&
// //       item.name.toLowerCase().startsWith(searchQuery)
// //   );

// //   return (
// //     <Box>
// //       {/* Banner */}
// //       <Box
// //         sx={{
// //           width: "100%",
// //           height: { xs: 200, md: 400 },
// //           backgroundImage: `url(${menBanner})`,
// //           backgroundSize: "cover",
// //           backgroundPosition: "center",
// //           mb: 4,
// //         }}
// //       >
// //         <Box
// //           sx={{
// //             width: "100%",
// //             height: "100%",
// //             backgroundColor: "rgba(0,0,0,0.4)",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //           }}
// //         >
// //           <Typography
// //             variant="h3"
// //             sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
// //           >
// //             Elegant Watches for Men
// //           </Typography>
// //         </Box>
// //       </Box>

// //       {/* Products Grid */}
// //       <Box sx={{ p: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
// //         <Grid container spacing={4}>
// //           {menProducts.map((product) => (
// //             <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
// //               <Card
// //                 sx={{
// //                   height: "100%",
// //                   borderRadius: 4,
// //                   boxShadow: 4,
// //                   transition: "transform 0.3s, box-shadow 0.3s",
// //                   "&:hover": {
// //                     transform: "scale(1.05)",
// //                     boxShadow: 8,
// //                   },
// //                 }}
// //               >
// //                 <CardMedia
// //                   component="img"
// //                   height="200"
// //                   image={product.image}
// //                   alt={product.name}
// //                   sx={{ objectFit: "cover", borderRadius: "16px 16px 0 0" }}
// //                 />
// //                 <CardContent>
// //                   <Typography variant="h6" gutterBottom>
// //                     {product.name}
// //                   </Typography>
// //                   <Typography variant="subtitle1" sx={{ mb: 2 }}>
// //                     ₹{product.price}
// //                   </Typography>
// //                   <Button
// //                     variant="contained"
// //                     fullWidth
// //                     sx={{
// //                       borderRadius: "20px",
// //                       textTransform: "none",
// //                       fontWeight: "bold",
// //                       backgroundColor: "#FF6F00",
// //                       "&:hover": {
// //                         backgroundColor: "#1976d2",
// //                       },
// //                     }}
// //                     onClick={() => addToCart(product)}
// //                   >
// //                     Add to Cart
// //                   </Button>
// //                 </CardContent>
// //               </Card>
// //             </Grid>
// //           ))}
// //         </Grid>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Men;




// import { useContext, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import products from "../basicc.json";
// import menBanner from "../assets/men.jpg";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   TextField,
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Button,
// } from "@mui/material";

// const Men = () => {
//   const { addToCart } = useContext(CartContext);
//   const [searchQuery, setSearchQuery] = useState("");

//   const menProducts = products.filter(
//     (item) =>
//       item.category.toLowerCase() === "men" &&
//       item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
//   );

//   return (
//     <Box>
//       {/* NAVBAR with "WristWatch" and Search Bar inside */}
//       <AppBar position="static" sx={{ backgroundColor: "#333" }}>
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//             WristWatch
//           </Typography>

//           <TextField
//             variant="outlined"
//             size="small"
//             placeholder="Search Watches"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             sx={{
//               backgroundColor: "white",
//               borderRadius: 1,
//               width: { xs: "60%", sm: "250px" },
//             }}
//           />
//         </Toolbar>
//       </AppBar>

//       {/* Banner */}
//       <Box
//         sx={{
//           width: "100%",
//           height: { xs: 200, md: 400 },
//           backgroundImage: `url(${menBanner})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
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
//             Elegant Watches for Men
//           </Typography>
//         </Box>
//       </Box>

//       {/* Product Grid */}
//       <Box sx={{ p: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
//         <Grid container spacing={4}>
//           {menProducts.length > 0 ? (
//             menProducts.map((product) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
//                 <Card
//                   sx={{
//                     height: "100%",
//                     borderRadius: 4,
//                     boxShadow: 4,
//                     transition: "transform 0.3s, box-shadow 0.3s",
//                     "&:hover": {
//                       transform: "scale(1.05)",
//                       boxShadow: 8,
//                     },
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     height="200"
//                     image={product.image}
//                     alt={product.name}
//                     sx={{ objectFit: "cover", borderRadius: "16px 16px 0 0" }}
//                   />
//                   <CardContent>
//                     <Typography variant="h6" gutterBottom>
//                       {product.name}
//                     </Typography>
//                     <Typography variant="subtitle1" sx={{ mb: 2 }}>
//                       ₹{product.price}
//                     </Typography>
//                     <Button
//                       variant="contained"
//                       fullWidth
//                       sx={{
//                         borderRadius: "20px",
//                         textTransform: "none",
//                         fontWeight: "bold",
//                         backgroundColor: "#FF6F00",
//                         "&:hover": {
//                           backgroundColor: "#1976d2",
//                         },
//                       }}
//                       onClick={() => addToCart(product)}
//                     >
//                       Add to Cart
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))
//           ) : (
//             <Typography
//               variant="h6"
//               sx={{ textAlign: "center", width: "100%", mt: 4 }}
//             >
//               No watches found.
//             </Typography>
//           )}
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default Men;


import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../basicc.json";
import menBanner from "../assets/men.jpg";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useLocation } from "react-router-dom";

const Men = () => {
  const { addToCart } = useContext(CartContext);
  const location = useLocation();

  // Get "search" from URL (e.g., ?search=f)
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.toLowerCase().trim() || "";

  // Filter only men products and match name
  const menProducts = products.filter(
    (item) =>
      item.category === "Men" &&
      item.name.toLowerCase().includes(searchQuery)
  );

  return (
    <Box>
      {/* Banner */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 200, md: 400 },
          backgroundImage: `url(${menBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
            sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Elegant Watches for Men
          </Typography>
        </Box>
      </Box>

      {/* Grid of Products */}
      <Box sx={{ p: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
        <Grid container spacing={4}>
          {menProducts.length > 0 ? (
            menProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    boxShadow: 4,
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 8,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      objectFit: "cover",
                      borderRadius: "16px 16px 0 0",
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="subtitle1" sx={{ mb: 2 }}>
                      ₹{product.price}
                    </Typography>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: "#FF6F00",
                        borderRadius: "20px",
                        "&:hover": { backgroundColor: "#1976d2" },
                      }}
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography
              variant="h6"
              sx={{ textAlign: "center", width: "100%", mt: 4 }}
            >
              No watches found.
            </Typography>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Men;
