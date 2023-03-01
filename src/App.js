//import logo from './logo.svg';
import React from 'react'
import { useState } from 'react';
import './App.js';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from 'react-bootstrap-icons';
import Home from "./Home";
import Scart from './Scart.js';
import {CartProvider} from 'react-use-cart';




function App() {
  return(
    <>
    <CartProvider>
         <Home/>
         <Scart/>
    </CartProvider>
   
    
    </>
  )
     

 }
export default App;
