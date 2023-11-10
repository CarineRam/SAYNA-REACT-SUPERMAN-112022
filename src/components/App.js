import React from 'react';
import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Game from '../pages/Game';
import Eshop from '../pages/Eshop';
import MonCompte from '../pages/MonCompte';
import NotFoundPage from '../pages/NotFoundPage';
import Cart from '../pages/Cart';
import Commande from '../pages/Commande';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='game' element={<Game />} />
          <Route path='eshop' element={<Eshop />} />
          <Route path='compte' element={<MonCompte />} />
          <Route path='cart' element={<Cart />} />
          <Route path='commande' element={<Commande />} />
          <Route path='*' element={<NotFoundPage/>} />
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
