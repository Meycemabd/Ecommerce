import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'; // Clientbereich
import AdminApp from './admin/AdminApp.jsx'; // Adminbereich
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} /> {/* Client */}
        <Route path="/admin/*" element={<AdminApp />} /> {/* Admin */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
