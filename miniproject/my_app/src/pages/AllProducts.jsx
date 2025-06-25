import React, { useState, useContext } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import products from "../basicc.json";
import { CartContext } from "../context/CartContext";

const AllProducts = () => {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);

  const { addToCart } = useContext(CartContext);

  // 🔍 Filter products by category and search
  const filteredProducts = products.filter((product) => {
    const matchCategory =
      category === "All" || product.category.toLowerCase() === category.toLowerCase();
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  // 🔁 Load more functionality
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <Box sx={{ p: { xs: 2, sm: 3 } }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        All Watches
      </Typography>

      {/* 🔽 Category Filter and Search Bar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mb: 3,
        }}
      >
        <TextField
          select
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{ minWidth: 150 }}
        >
          {["All", "Men", "Women", "Child"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label={`Search in ${category} watches`}
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      {/* 🖼️ Product Grid */}
      <Grid container spacing={2}>
        {filteredProducts.slice(0, visibleCount).map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{
                  objectFit: "contain",
                  backgroundColor: "white",
                  padding: 1,
                }}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography>₹{product.price.toLocaleString()}</Typography>
                <Typography color="text.secondary">
                  Category: {product.category}
                </Typography>
                <Button
                  variant="contained"
                  color="warning"
                  fullWidth
                  sx={{ mt: 1 }}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Load More Button */}
      {filteredProducts.length > visibleCount && (
        <Box textAlign="center" mt={4}>
          <Button variant="contained" onClick={handleLoadMore}>
            Load More
          </Button>
        </Box>
      )}

      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <Typography sx={{ mt: 4 }} align="center">
          No matching watches found.
        </Typography>
      )}
    </Box>
  );
};

export default AllProducts;
