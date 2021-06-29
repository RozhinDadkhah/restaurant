import React from 'react'
import { GlobalStyle } from './components/style/globalStyle';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Hero from './components/hero/Hero';
import { productData, productDataTwo } from './components/products/data';
import Products from './components/products/Products';
import Feature from './components/Feature/Feature'
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
