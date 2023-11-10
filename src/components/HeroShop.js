import React from 'react';
import bg_eshop from '../assets/images/img20.png';
import '../styles/heroShop.css';

function HeroShop() {
  return (
    <>
      <img src={bg_eshop} alt="fond Superman Eshop" className='bg_eshop' />
      <div id="hero">
        <div className="container">
          <h1 className="hero-title text-uppercase">Envie d'un slip jaune?</h1>
        </div>

      </div>
    </>
  )
}

export default HeroShop