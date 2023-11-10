import React from 'react';
import logo_0 from '../assets/logos/logo_0.png';
import logo_1 from '../assets/logos/logo_1.png';
import logo_2 from '../assets/logos/logo_2.png';
import logo_3 from '../assets/logos/logo_3.png';
import logo_41 from '../assets/logos/logo_4.1.png';
import logo_5 from '../assets/logos/logo_5.png';
import logo_6 from '../assets/logos/logo_6.png';
import '../styles/footer.css';

function Footer(){
    return (
        <footer className="mt-5 py-5">
            <div className="container text-center">
                <div className="text-footer">
                <img src={logo_0} alt="" />
                <span className="textfooter"> Ce projet respecte l’univers cinématographique des films Superman.</span>
                </div>
                <div className="social-footer mt-3">
                    <a href="" className="social-item hoveryellow">
                        <img width="4%" src={logo_1} alt="" />
                        <img src={logo_2} alt="" />
                        <img width="4%" src={logo_3} alt="" />
                    </a>
                    <a href="" className="social-item"
                        ><img
                        className="hoveryellow"
                        src={logo_41}
                        alt=""
                    /></a>
                    <a href="" className="social-item"
                        ><img className="hoveryellow" src={logo_5} alt=""
                    /></a>
                    <a href="" className="social-item"
                        ><img className="hoveryellow" src={logo_6} alt=""
                    /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;