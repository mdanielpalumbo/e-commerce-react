import React from 'react'
import {FaOpencart} from 'react-icons/fa'

const NavBar = () => {
    return (
        <>
        <header>
            <div className="side"></div>
            <div className="center">
                <a href ="#" className="logo"><h2>Tienda Virtual</h2></a>
                <nav className="menu">
                        <a href="#">Productos</a>
                        <a href="#">Arma tu PC</a>
                        <a href="#">Contactanos</a>    
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