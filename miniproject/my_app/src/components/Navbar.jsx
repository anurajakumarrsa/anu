// import React, { useContext, useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Badge,
//   Box,
//   Button,
//   Menu,
//   MenuItem,
//   InputBase,
// } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import SearchIcon from "@mui/icons-material/Search";
// import { NavLink, useNavigate, useLocation } from "react-router-dom";
// import { CartContext } from "../context/CartContext";

// const Navbar = () => {
//   const { cartItems } = useContext(CartContext);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = (path) => {
//     setAnchorEl(null);
//     if (path) {
//       navigate(path);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       navigate(`${location.pathname}?search=${searchQuery}`);
//       setSearchQuery("");
//     }
//   };

//   // Show search bar only on Men, Women, or Child pages
//   const showSearch = ["/men", "/women", "/child"].includes(location.pathname);

//   return (
//     <AppBar position="sticky" sx={{ backgroundColor: "#1e1e1e", px: 2 }}>
//       <Toolbar
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           flexWrap: "wrap",
//           gap: 2,
//         }}
//       >
//         {/* Logo */}
//         <Typography
//           variant="h5"
//           component={NavLink}
//           to="/"
//           sx={{ fontWeight: "bold", color: "white", textDecoration: "none" }}
//         >
//           Wrist<span style={{ color: "#FF6F00" }}>Wise</span>
//         </Typography>

//         {/* Conditionally Render Search Bar */}
//         {showSearch && (
//           <Box
//             component="form"
//             onChange={handleSearch}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               backgroundColor: "#333",
//               px: 1,
//               py: 0.5,
//               borderRadius: 2,
//               width: { xs: "100%", sm: "250px" },
//               flexGrow: 1,
//               maxWidth: "300px",
//             }}
//           >
//             <InputBase
//               placeholder="Search…"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               sx={{ color: "#fff", flex: 1, ml: 1 }}
//             />
//             <IconButton type="submit" sx={{ color: "#FF6F00" }}>
//               <SearchIcon />
//             </IconButton>
//           </Box>
//         )}

//         {/* Nav Buttons */}
//         <Box
//           sx={{
//             display: "flex",
//             gap: 2,
//             alignItems: "center",
//             flexWrap: "wrap",
//           }}
//         >
//           <Button component={NavLink} to="/" sx={{ color: "#fff" }}>
//             Home
//           </Button>

//           <Button sx={{ color: "#fff" }} onClick={handleMenuClick}>
//             Categories
//           </Button>
//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={() => handleMenuClose()}
//           >
//             <MenuItem onClick={() => handleMenuClose("/men")}>Men</MenuItem>
//             <MenuItem onClick={() => handleMenuClose("/women")}>Women</MenuItem>
//             <MenuItem onClick={() => handleMenuClose("/child")}>Child</MenuItem>
//           </Menu>

//           <Button component={NavLink} to="/login" sx={{ color: "#fff" }}>
//             Login
//           </Button>

//           <IconButton component={NavLink} to="/cart" sx={{ color: "#fff" }}>
//             <Badge badgeContent={cartItems.length} color="error">
//               <ShoppingCartIcon />
//             </Badge>
//           </IconButton>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;



import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  // Sum all quantities from cartItems
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1e1e1e", px: 2 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* Logo */}
        <Typography
          variant="h5"
          component={NavLink}
          to="/"
          sx={{ fontWeight: "bold", color: "white", textDecoration: "none" }}
        >
          Wrist<span style={{ color: "#FF6F00" }}>Wise</span>
        </Typography>

        {/* Nav Links + Cart */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Button component={NavLink} to="/" sx={{ color: "#fff" }}>
            Home
          </Button>
          <Button component={NavLink} to="/products" sx={{ color: "#fff" }}>
            Products
          </Button>
          <Button component={NavLink} to="/login" sx={{ color: "#fff" }}>
            Profile
          </Button>

          <IconButton component={NavLink} to="/cart" sx={{ color: "#fff" }}>
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;




