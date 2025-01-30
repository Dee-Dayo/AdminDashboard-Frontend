// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";



export const store = configureStore({
  reducer: {
      auth: authReducer, // Add the auth reducer to the store
    // Add reducers here
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializableCheck
    }),
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development mode
});

export const RootState =  store.getState; // Export RootState type for useSelector

export const AppDispatch =  store.dispatch; // Export AppDispatch type for useDispatch

