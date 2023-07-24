import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categorySlice } from "./slices/categorySlice";
import { basketSlice } from "./slices/basketSlice";
import tokenSlice from "./slices/tokenSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "basket",
  storage,
};
const persistAuthConfig = {
  key: "token",
  storage,
};
const persistedReducer = persistReducer(persistConfig, basketSlice);
const persistedAuthReducer = persistReducer(persistAuthConfig, tokenSlice);

export const store = configureStore({
  reducer: {
    category: categorySlice,
    basket: persistedReducer,
    token: persistedAuthReducer,
  },
});
export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
