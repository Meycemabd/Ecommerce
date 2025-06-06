# 🛍️ Modern E-Commerce Frontend

This is my personal e-commerce frontend project. It is inspired by the clean and modern design of H&M or Zara online stores. The app is built with React and Redux Toolkit. It includes all the basic features of an online shop.

## ✨ Features

- ✅ Homepage with product cards
- ❤️ Favorites / Wishlist (with Redux)
- 🛒 Shopping cart with quantity control and delete
- 💳 Checkout page with fake payment UI
- ✅ Thank You page after order
- 🔐 Login and dashboard pages (frontend only)
- 📱 Responsive design (mobile-friendly)
- ⚙️ State management with Redux Toolkit
- 💾 Save cart and favorites in localStorage

## ⚙️ Technologies used

- React.js
- Redux Toolkit
- React Router DOM
- MDBootstrap (mdb-react-ui-kit)
- React Icons
- Fake checkout (Stripe or PayPal planned)

## 📁 Project structure (short)

client/
├── components/ # UI components like Navbar, ProductCard
├── pages/ # Pages like Home, Cart, Checkout, Login
├── redux/ # Redux slices (cart, auth, etc.)
├── App.js # Routing
└── index.js # App entry point


## 🚀 How to run the project

```bash
# Go into the client folder
cd client

# Install dependencies
npm install

# Start the development server
npm start