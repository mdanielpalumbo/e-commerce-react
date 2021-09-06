import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const Cart = () => {
    const {cart} = useContext(CartContext)
    return (
        <div className="cartBody">
            <h2> CARRITO </h2>

            {cart.map(prod => (
                <div key={prod.id}>
                    
                    <h3>{prod.model}</h3>
                    <p>Cantidad: {prod.count}</p>
                    <p>Precio: {prod.price}</p>

                </div>
            ))}
        </div>
    )
}
