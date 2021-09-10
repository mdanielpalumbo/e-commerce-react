import React from 'react'
import {FaCartArrowDown} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <>
        <header>
            <div className="side"></div>
            <div className="center">
                <Link to="/" className="logo"><h2>Tienda Virtual</h2></Link>
                <nav className="menu">
                        <Link className="navLink" to="/">Productos</Link>
                        <Link className="navLink" to="/build">Arma tu PC</Link>
                </nav>
            </div>
            <div className="side cart">
                <Link to="/cart" className="cartIcon"><FaCartArrowDown className="cartIcon"/></Link>
            </div> 
        </header>
        </>
    )
}

export default NavBar;