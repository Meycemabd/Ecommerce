// src/redux/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "p1",
      name: "Basic T-Shirt",
      price: 19.99,
      image: "https://via.placeholder.com/100x100?text=Shirt",
      category: "Shirts",
    },
    {
      id: "p2",
      name: "Jeans Hose",
      price: 49.99,
      image: "https://via.placeholder.com/100x100?text=Jeans",
      category: "Hosen",
    },
    {
      id: "p3",
      name: "Lederjacke",
      price: 129.99,
      image: "https://via.placeholder.com/100x100?text=Jacke",
      category: "Jacken",
    },
    {
      id: "p4",
      name: "Sneaker Weiß",
      price: 89.99,
      image: "https://via.placeholder.com/100x100?text=Sneaker",
      category: "Schuhe",
    },
    {
      id: "p5",
      name: "Sweatshirt",
      price: 39.99,
      image: "https://via.placeholder.com/100x100?text=Pullover",
      category: "Pullover",
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
  },
});

export default productSlice.reducer;
