import './App.css';
//import { useState, createContext } from 'react';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/CartContext';
import { NotificationProvider } from './notification/NotificationService';
import Cart from './components/Cart/Cart'

/* 
export const MyContext = createContext()

const Notification = () => {
  return (
    <div>
      un mensaje
    </div>
  )
} */

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartProvider> 
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
