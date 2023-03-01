//import logo from './logo.svg';
import { useState } from 'react';
import './App.js';
import './style.css';
import  './css/bootstrap.min.css';
import Home from "./Home"
import Scart from './Scart.js';
import {CartProvider} from 'react-use-cart'



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
