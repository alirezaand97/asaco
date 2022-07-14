import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import modals from "./modals";
import service from "./services";
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
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";

const persistConfig = {
  key: "root",
  storage,
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
