import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Product from './component/Product';
import About from './component/About';
import Contact from './component/Contact';
import Products from './component/Products';
import { Card } from 'react-bootstrap';
import Cart from './component/Cart';




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </>
  );
}

export default App;
