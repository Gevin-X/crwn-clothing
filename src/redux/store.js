// import { applyMiddleware} from 'redux';
// import { configureStore } from '@reduxjs/toolkit'
// import logger from './root-reducer';
// import rootReducer from './root-reducer';

// const middlewares = [logger];


// const store = configureStore( { reducer: rootReducer ,applyMiddleware(...middlewares)});
// export default store;
// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'; // Import your middleware
import rootReducer from './root-reducer';

const middlewares = [logger];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middlewares],
});

export default store;