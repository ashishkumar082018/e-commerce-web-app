import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Store from './components/pages/Store';
import Contact from './components/pages/Contact';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Store />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="store" element={<Store />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
