import React from 'react';
import '../styles/Home.css'; // falls du eigene CSS willst
import products from '../data/data';

export default function Home() {
  return (
    <main className="home-container">
      <h2>New Arrivals</h2>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>${product.price.toFixed(2)}</p>
            <button className="btn-buy">Buy Now</button>
          </div>
        ))}
      </div>
    </main>
  );
}
