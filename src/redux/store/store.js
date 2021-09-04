import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
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

import contactsReducer from 'redux/reducers/contacts-reducer';
import storage from 'redux-persist/lib/storage';
import authReducer from 'redux/reducers/auth-slice';

// const middleware = [...getDefaultMiddleware(), logger];

// const store = configureStore({
//   reducer: {
//     contacts: contactReducer,
//     [contactApi.reducerPath]: contactApi.reducer,
//   },
//   devTools: process.env.NODE_ENV === 'development',
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     contactApi.middleware,
//   ],
// });

// setupListeners(store.dispatch);
// export { store };

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
  ],
});

export const persistor = persistStore(store);
// export default store;
