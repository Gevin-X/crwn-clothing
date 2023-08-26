
/*
import { configureStore  } from '@reduxjs/toolkit'; 
import logger from 'redux-logger'; // Import your middleware
import rootReducer from './root-reducer';

const middlewares = [logger];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middlewares],
});

export default store;


__________________________________________ in this implimentation is new way but i had erroe with callstack
*/





import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;