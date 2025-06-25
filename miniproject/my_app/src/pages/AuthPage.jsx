import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Divider,
} from "@mui/material";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // toggle between login/signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (isLogin) {
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        alert("Login successful!");
      } else {
        alert("Invalid credentials");
      }
    } else {
      const userExists = users.some(u => u.email === email);
      if (userExists) {
        alert("User already exists!");
      } else {
        const newUser = { email, password };
        localStorage.setItem("users", JSON.stringify([...users, newUser]));
        alert("Registration successful!");
        setIsLogin(true); // Switch to login
      }
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Paper sx={{ p: 4, width: "100%", maxWidth: 400 }}>
        <Typography variant="h5" textAlign="center" fontWeight="bold" gutterBottom>
          {isLogin ? "Login" : "Sign Up"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            sx={{ mb: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            sx={{ mb: 3 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ py: 1.2, fontWeight: "bold" }}
          >
            {isLogin ? "Log In" : "Register"}
          </Button>
        </form>

        <Divider sx={{ my: 2 }} />
        <Typography textAlign="center" variant="body2">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <Button onClick={toggleMode}>
            {isLogin ? "Sign Up" : "Log In"}
          </Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default AuthPage;
