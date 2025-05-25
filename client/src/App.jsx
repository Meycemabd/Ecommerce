import React from 'react';
import Home from '../src/pages/Home';
import  '../src/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductsPage from './pages/ProductsPage';



// CSS-Dateien 

function App() {
  return (
    <>
      
      {/* {<Home />} */}
      {<ProductsPage />}
    </>
  );
}

export default App;
