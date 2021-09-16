import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import {CartContext } from '../../context/CartContext'

const NavBar = () => {
    const {cart} = useContext(CartContext)
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
                <Link to="/cart" className="cartWidget"><CartWidget/></Link>
            </div> 
        </header>
        </>
    )
}

export default NavBar;