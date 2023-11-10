import React from 'react';
import fondSuperman from '../assets/images/img1.png';
import '../styles/introHome.css';
import logoDC from '../assets/logos/logoDC.png';

function IntroHome() {
    return (
        <>
            <img src={fondSuperman} alt="Fond Superman" className="backgroundSuperman"></img>

            <div className="Intro">
                <img src={logoDC} alt="Logo DC" className='logoDc' />
                <div className='superman'>SUPERMAN</div> 
                <div className='acier'>L’HOMME D’ACIER</div>
            </div>
        </>
    )
}

export default IntroHome