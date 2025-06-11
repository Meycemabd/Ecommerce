// src/store/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';
import cartReducer from './cartSlice'; 
import authReducer from './authSlice';
import orderReducer from "./orderSlice"; // ✅ Importiert

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  cart: cartReducer, 
  auth: authReducer,
  order: orderReducer, // ✅ Jetzt korrekt eingebunden!
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'favorites', 'auth'], // ❗️ 'order' NICHT speichern, da Dummy
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
