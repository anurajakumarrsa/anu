// import { createContext, useState } from "react";

// export const CartContext = createContext();      // This will let other components access cart data using useContext.

// export const CartProvider = ({ children }) => {          


//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     const exist = cartItems.find((item) => item.id === product.id);             //Checks if the product is already in the cart.
//     if (exist) {
//       setCartItems(cartItems.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       ));                                                                            //If it exists, just increase the quantity.
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }                                                                                   //If not, add the product to the cart with quantity 1
//   };

//   const removeFromCart = (id) => {
//     setCartItems(cartItems.filter((item) => item.id !== id));
//   };                                                                                //Removes an item from the cart based on its id.



//   const increaseQty = (id) => {
//     setCartItems(cartItems.map((item) =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//     ));
//   };                                                                                 //Increases the quantity of a specific item by 1.



//   const decreaseQty = (id) => {
//     setCartItems(cartItems.map((item) =>
//       item.id === id
//         ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
//         : item
//     ));
//   };                                                                                  //Decreases the quantity by 1, but never less than 1.



//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQty, decreaseQty }}>
//       {children}
//     </CartContext.Provider>
//   );
// };





















import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const increaseQty = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const saveForLater = (id) => {
    const item = cartItems.find(i => i.id === id);
    setSavedItems([...savedItems, item]);
    setCartItems(cartItems.filter(i => i.id !== id));
  };

  const moveToCart = (id) => {
    const item = savedItems.find(i => i.id === id);
    setCartItems([...cartItems, item]);
    setSavedItems(savedItems.filter(i => i.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        savedItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        saveForLater,
        moveToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

