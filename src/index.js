import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import "./styles/index.css"
import Header from './Header';
import Home from './Home';
import AccountEnter from './AccountEnter';
import Footer from './Footer';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Header/>
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="AccountEnter" element={<AccountEnter/>}/>
      </Routes>
    </Router>
    <Footer/>
    </Provider>
  </React.StrictMode>
);
