import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from "./redux/store";
import AppContent from './App.jsx';
import AdminApp from './admin/pages/AdminApp.jsx';  // korrigierter Pfad
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {window.location.pathname.startsWith('/admin') ? <AdminApp /> : <AppContent />}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
