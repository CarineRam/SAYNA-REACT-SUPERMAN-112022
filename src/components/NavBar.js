import React from "react";
import '../styles/navbar.css';
import { NavLink } from "react-router-dom";
import logohome from "../assets/logos/logo_blanc.png";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <NavLink to="/" className="navbar-brand">
                    <img src={logohome} alt="" className="logohome" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink to="home" className="nav-link" aria-current="page" >HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="game" className="nav-link"  >GAME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="eshop" className="nav-link" >ESHOP</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="compte" className="nav-link" >MY COMPTE</NavLink>
                        </li>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;