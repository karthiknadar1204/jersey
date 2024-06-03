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
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
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
