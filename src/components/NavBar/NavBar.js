import React from 'react'
import {FaOpencart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <>
        <header>
            <div className="side"></div>
            <div className="center">
                <Link to="/" className="logo"><h2>Tienda Virtual</h2></Link>
                <nav className="menu">
                        <Link to="/">Productos</Link>
                        <Link to="/build">Arma tu PC</Link>
                </nav>
            </div>
            <div className="side cart">
                <button type="button" className="cartIcon"><FaOpencart className="cartIcon"/></button>
            </div> 
        </header>
        </>
    )
}

export default NavBar;