import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from 'react-toastify';

// Create Context
const CartContext = createContext();

// Cart Provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const userEmail = localStorage.getItem('email');
  const sanitizedEmail = userEmail?.replace('@', '').replace('.', '');
  const crudCrudBaseURL = `${import.meta.env.VITE_APP_CURD_CURD_API}/cart${sanitizedEmail}`;

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(crudCrudBaseURL);
        if (!response.ok) {
          throw new Error('Failed to fetch cart items.');
        }
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    fetchCartItems();
  }, [crudCrudBaseURL]);

  const addToCart = async (product) => {
    const existingProduct = cartItems.find(item => item.title === product.title);
    if (existingProduct) {
      const updatedCart = cartItems.map(item =>
        item.title === product.title
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);

      try {
        const updatedProduct = { ...existingProduct, quantity: existingProduct.quantity + 1 };
        const { _id, ...productWithoutId } = updatedProduct;

        const response = await fetch(`${crudCrudBaseURL}/${_id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productWithoutId),
        });
        if (!response.ok) {
          throw new Error('Failed to update product in cart.');
        }
        toast.success('Item quantity updated!');
      } catch (error) {
        console.error('Error updating product in cart:', error);
      }
    } else {
      const newProduct = { ...product, quantity: 1 };
      setCartItems(prevCart => [...prevCart, newProduct]);

      try {
        const response = await fetch(crudCrudBaseURL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newProduct),
        });
        if (!response.ok) {
          throw new Error('Failed to add product to cart.');
        }
        toast.success('Item added to cart!');
      } catch (error) {
        console.error('Error adding product to cart:', error);
      }
    }
  };

  const removeFromCart = async (index, id) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);

    try {
      const response = await fetch(`${crudCrudBaseURL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to remove product from cart.');
      }
      toast.error('Item removed from cart.');
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to use the cart context
export const useCart = () => useContext(CartContext);
