import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import {FaCartArrowDown} from 'react-icons/fa'

export const CartWidget = () => {
    const [count, setCount] = useState(0)
    const {cart, prodCount} = useContext(CartContext)
    const cartCount = () => {
        setCount(cart.reduce((acc, prod) => acc + prod.count, 0))
    }
    useEffect(()=>{
        cartCount()
    },[cart, prodCount])
    return (
        <>
            {count === 0 ? <FaCartArrowDown className="cartIcon"/>
            :
            <>
                <FaCartArrowDown className="cartIcon"/><p>({count})</p>
            </>
            }
        </>
    )
}
