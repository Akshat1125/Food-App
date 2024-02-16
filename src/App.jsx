import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './screens/Home'
import Login from './screens/Login';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import Myorder from './screens/Myorder';

function App() {

  return (
    <CartProvider>
    <Router>
      <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/createuser' element={<Signup/>}></Route>
      <Route exact path='/myOrder' element={<Myorder/>}></Route>

      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;