import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import modals from "./modals";
import service from "./services";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/query";
import { initialState } from "./auth";
const expireReducer = require("redux-persist-expire");

const expireAuth = expireReducer(auth.name, {
  expireSeconds: 30,
  expiredState: initialState,
  autoExpire: true,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [modals.name],
  transforms: [expireAuth],
};

const rootReducer = combineReducers({
  [service.reducerPath]: service.reducer,
  [auth.name]: auth.reducer,
  [modals.name]: modals.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(service.middleware),
});

export const persistor = persistStore(store);


export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch);

export default store;
