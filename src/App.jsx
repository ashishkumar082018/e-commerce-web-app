import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Store from './components/pages/Store';
import Contact from './components/pages/Contact';
import ProductDetail from './components/pages/ProductDetail';
import Login from './components/pages/Login';
import AuthContext from './context/AuthContext';

const products = [
  {
    id: 867,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    images: [
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc28',
      'https://images.unsplash.com/photo-1551963831-b3b1ca40c98f',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29'
    ],
    reviews: [
      'Not what I expected, but still okay.',
      'Good quality, but a bit expensive.',
      'Amazing product, highly recommend!'
    ]
  },
  {
    id: 162,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    images: [
      'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      'https://images.unsplash.com/photo-1551963831-b3b1ca40c98f',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc28'
    ],
    reviews: [
      'Amazing product, highly recommend!',
      'Good quality, but a bit expensive.'
    ]
  },
  {
    id: 337,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    images: [
      'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc28',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29'
    ],
    reviews: [
      'Worth every penny!',
      'Amazing product, highly recommend!',
      'Good quality, but a bit expensive.'
    ]
  },
  {
    id: 537,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    images: [
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
      'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      'https://images.unsplash.com/photo-1551963831-b3b1ca40c98f'
    ],
    reviews: [
      'Not what I expected, but still okay.',
      'Worth every penny!',
      'Fantastic colors and great durability.'
    ]
  }
];

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <CartProvider>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={isLoggedIn ? <Store products={products} /> : <Navigate to="/login" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={!isLoggedIn ? <Login /> : <Navigate to="/" />} />
            <Route path="store" element={<Store products={products} />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/store/:productId" element={isLoggedIn ? <ProductDetail products={products} /> : <Navigate to="/login" />} />
          </Route>
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
