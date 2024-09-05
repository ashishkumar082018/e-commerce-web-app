import React from 'react';
import Layout from './components/Layout';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Layout />
      </div>
    </CartProvider>
  );
}

export default App;
