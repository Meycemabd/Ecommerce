// src/redux/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import favoritesReducer from '../redux/favoritesSlice';

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

import storage from 'redux-persist/lib/storage'; // localStorage

// 1. Combine Reducers
const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

// 2. Persist Config
const persistConfig = {
  key: 'root',
  storage,
};

// 3. Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Create Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 5. Export Persistor
export const persistor = persistStore(store);
