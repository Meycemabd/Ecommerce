import React from 'react';
import Header from '../src/components/Header';
import Home from '../src/pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// CSS-Dateien 
import '../src/styles/base.css';
import '../src/styles/layout.css';
import '../src/styles/components.css';
import '../src/styles/Home.css';

function App() {
  return (
    <>
      <Header />
      {<Home />}
    </>
  );
}

export default App;
