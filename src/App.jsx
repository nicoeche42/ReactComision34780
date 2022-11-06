import './App.css';
import { useState, createContext } from 'react';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotificationProvider } from './notification/NotificationService';

export const MyContext = createContext()

const Notification = () => {
  return (
    <div>
      un mensaje
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <NotificationProvider> 
      <MyContext.Provider value={10}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
      </NotificationProvider>
    </div>
  );
}

export default App;
