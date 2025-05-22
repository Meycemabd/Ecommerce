import React from 'react';
import Header from '../src/components/Header';
import Home from '../src/pages/Home';

// CSS-Dateien korrekt importieren
import '../src/styles/base.css';
import '../src/styles/layout.css';
import '../src/styles/components.css';
import '../src/styles/Home.css';

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
