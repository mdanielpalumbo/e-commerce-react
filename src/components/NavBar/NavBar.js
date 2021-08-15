import React from 'react'


const NavBar = () => {
    return (
        <header>
            <div className="logo">
                <h2>Tienda Virtual</h2>
            </div>
            <nav className="menu">
                    <a href="#">Productos</a>
                    <a href="#">Arma tu PC</a>
                    <a href="#">Contactanos</a>    
            </nav> 
        </header>
    )
}

export default NavBar;