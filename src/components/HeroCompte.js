import React from 'react'
import bg_compte from '../assets/images/img37.png';
import '../styles/heroCompte.css';

function HeroCompte() {
    return (
        <>
            <img src={bg_compte} alt="fond Superman Eshop" className='bg_compte' />
            <div id="hero">
                <div className="container">
                    <h1 className="hero-title text-uppercase">Seriez vous kryptonien? <br /> dites nous en plus</h1>
                </div>
            </div>
        </>
    )
}

export default HeroCompte