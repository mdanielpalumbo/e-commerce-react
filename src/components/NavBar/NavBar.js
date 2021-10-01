import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <>
        <header>
            <div className="side">
                <Link to="/" className="logo"><h2>Tienda Virtual</h2></Link>
            </div>
            <div className="center">
                {/* <Link to="/" className="logo"><h2>Tienda Virtual</h2></Link> */}
                <nav className="menu">
                        {/* <Link className="navLink" to="/">Productos</Link>
                        <Link className="navLink" to="/build">Arma tu PC</Link> */}
                </nav>
            </div>
            <div className="side cart">
                <nav className="menu">
                        <Link className="navLink" to="/">Productos</Link>
                        <Link className="navLink" to="/build">Arma tu PC</Link>
                </nav>
                <Link to="/cart" className="cartWidget"><CartWidget/></Link>
            </div> 
        </header>
        </>
    )
}

export default NavBar;