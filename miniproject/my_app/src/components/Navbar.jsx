import React, { useContext, useState } from "react";     //Imports React and two hooks:

import {
  AppBar,
  Toolbar,          //Toolbar: flex container inside AppBar.
  Typography,
  IconButton,
  Badge,
  Box,
  Button,
  Menu,                  //Menu, MenuItem: dropdown menu.
  MenuItem,            
  InputBase              //light weight input feid
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";        //Cart icon
import SearchIcon from "@mui/icons-material/Search";                      // Search icon
import { NavLink, useNavigate } from "react-router-dom";                    // Routing tools
import { CartContext } from "../context/CartContext";                          // Global cart context

const Navbar = () => {
  const { cartItems } = useContext(CartContext);                       // Access cart items
  const [anchorEl, setAnchorEl] = useState(null);                      // Dropdown anchor
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();                          // Opens menu by setting anchor element to the button that was clicked

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);         
  };                                                //Opens the dropdown menu and stores the element that was clicked.

  
  

  const handleMenuClose = (path) => {
    setAnchorEl(null);                         // closes the menu
    if (path) {
      navigate(path);
    }
  };                                            // If a path is passed, navigate to that route

  const handleSearch = (e) => {
    e.preventDefault();                             // Prevents page reload on form submit
    if (searchQuery.trim()) {
      // You can route to a search page or filter products elsewhere
      console.log("Searching for:", searchQuery);
      setSearchQuery("");
    }
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1e1e1e", px: 2 }}>               
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        
        {/* Logo */}                              
        <Typography
          variant="h5"
          component={NavLink}
          to="/"
          sx={{ fontWeight: "bold", color: "white", textDecoration: "none" }}> Wrist<span style={{ color: "#FF6F00" }}>Wise</span>
        </Typography>

        {/* Search Bar */}
        <Box
          component="form"
          onSubmit={handleSearch}
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#333",
            px: 1,
            py: 0.5,
            borderRadius: 2,
            mx: 2,
            width: { xs: "100%", sm: "300px" },
            mt: { xs: 1, sm: 0 }
          }}
        >
          <InputBase
            placeholder="Search…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ color: "#fff", flex: 1, ml: 1 }}
          />
          <IconButton type="submit" sx={{ color: "#FF6F00" }}>
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Nav Buttons */}
        <Box sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}>
          <Button component={NavLink} to="/" sx={{ color: "#fff" }}>
            Home
          </Button>

          {/* Dropdown Menu */}
          <Button sx={{ color: "#fff" }} onClick={handleMenuClick}>
            Categories
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleMenuClose()}>
            <MenuItem onClick={() => handleMenuClose("/men")}>Men</MenuItem>
            <MenuItem onClick={() => handleMenuClose("/women")}>Women</MenuItem>
            <MenuItem onClick={() => handleMenuClose("/child")}>Child</MenuItem>
          </Menu>

          {/* Login */}
          <Button component={NavLink} to="/login" sx={{ color: "#fff" }}>
            Login
          </Button>

          {/* Cart Icon */}
          <IconButton component={NavLink} to="/cart" sx={{ color: "#fff" }}>
            <Badge badgeContent={cartItems.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
