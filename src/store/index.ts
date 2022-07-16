import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import modals from "./modals";
import service from "./services";
import {  persistReducer,persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { setupListeners } from "@reduxjs/toolkit/query";


const rootReducer = combineReducers({
  [service.reducerPath]: service.reducer,
  [auth.name]: auth.reducer,
  [modals.name]: modals.reducer,

});

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(service.middleware),
});

export const persistor = persistStore(store);


export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch);

export default store;
