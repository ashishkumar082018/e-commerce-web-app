import React, { createContext, useState, useContext } from "react";

// Create Context
const CartContext = createContext();

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

// Cart Provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(cartElements);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((i) => i.title === item.title);
      if (itemExists) {
        // Increase quantity if item exists
        return prevItems.map((i) =>
          i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Add new item to cart
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item, i) => {
          if (i === index && item.quantity > 1) {
            // Decrease the quantity if more than 1
            return { ...item, quantity: item.quantity - 1 };
          } else if (i === index && item.quantity === 1) {
            // Remove the item if quantity is 1
            return null;
          }
          return item;
        })
        .filter(Boolean); // Remove null values from the array
    });
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to use the cart context
export const useCart = () => useContext(CartContext);
