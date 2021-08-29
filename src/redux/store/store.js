import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
import logger from 'redux-logger';
// import { contactApi } from 'redux/contacts/contact-slice';

import contactsReducer from 'redux/reducers/contacts-reducer';

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

const store = configureStore({
  reducer: { contacts: contactsReducer },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});

export default store;
