import * as React from "react";  //import React from 'react';
import * as ReactDOM from "react-dom";  //import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { BrowserRouter ,RouterProvider} from 'react-router-dom';
import store from './redux/store'
import App from './App';
import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')


  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals  //reportWebVitals();



  //import reportWebVitals from './reportWebVitals';
  
  /*
  import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  */
  
  
  /*1
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </React.StrictMode>
  );
  
  */
  
  
  
  
  
  
  
  //import React from 'react';
  //import ReactDOM from 'react-dom';
  //import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
  
  /*
  ReactDOM.render(
    <Router> {/* Wrap your App component with Router /}
    <App />
    </Router>,
    document.getElementById('root')
    );
    
  */
  
  );