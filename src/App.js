import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import AllProducts from './pages/AllProducts';
import Home from './pages/Home';
import ProductInfo from './pages/ProductInfo';
import Contact from './pages/Contact';
import CartPage from './components/CartPage';
import CartProvider from './CartContext';

const App = () => {
  return (
    <CartProvider>
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Ensure the flex container takes at least the full height of the viewport */}
        <Navbar />
        <main className="flex-grow"> {/* This allows the content area to grow and push the footer down */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/all' element={<AllProducts />} />
            <Route path='/product/:id' element={<ProductInfo/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/cart' element={<CartPage/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
