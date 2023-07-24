import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
// import HomePage from './Pages/HomePage';
// import FormValidationExample from './Pages/Login';
// import Registration from './Pages/Registration';
import App from './App';
// import Registration from './Pages/Registration';
// import FormValidationExample from './Pages/Login';
// import HomePage from './Pages/HomePage';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './Features/User';
import { BrowserRouter } from 'react-router-dom';
const store=configureStore({
  reducer:{
    user:userReducer
  }
})

// import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
 <Provider store={store}>
    <App/>
    {/* <Profile/>
    <Login_page/> */}
    {/* <Dropdown/> */}
    {/* <PaymentPage/> */}
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
