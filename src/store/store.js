import {configureStore,  combineReducers} from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
import { authSlice, notificationSlice, OrdenSlice, paginateSlice, SaleSlice } from './'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['orden', 'sale'], 
  };

const rootReducer = combineReducers({
    notification: notificationSlice.reducer,
    paginate: paginateSlice.reducer,
    auth: authSlice.reducer,
    orden: OrdenSlice.reducer,
    sale: SaleSlice.reducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
          },
        }).concat(thunk),
});

export const persistor = persistStore(store);