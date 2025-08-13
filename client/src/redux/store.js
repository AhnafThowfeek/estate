import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


//A persisted reducer in React (with Redux) is a way to save the Redux state (like user login or cart data) to local storage,
//  so it doesn’t reset when the page reloads.

const rootReducer = combineReducers({user: userReducer})

const persistConfig ={
  key:'root',
  storage,
  version: 1,

}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
      serializableCheck: false,
  }),
})

export const persistor = persistStore(store);