// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Men from "./pages/Men";
// import Women from "./pages/Women";
// import Child from "./pages/Child";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import { CartProvider } from "./context/CartContext";

// const App = () => {
//   return (
//     <CartProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/men" element={<Men />} />
//           <Route path="/women" element={<Women />} />
//           <Route path="/child" element={<Child />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Context
import { CartProvider } from "./context/CartContext";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import AuthPage from "./pages/AuthPage"; // ✅ NEW LOGIN/SIGNUP PAGE
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<AuthPage />} /> {/* ✅ LOGIN/SIGNUP */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
