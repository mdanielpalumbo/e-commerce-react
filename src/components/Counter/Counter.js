import React, { useContext, useState, useEffect } from 'react'
import {FaPlus,FaMinus} from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'

export const Counter = ({max, prod}) => {

    const {addToCart} = useContext(CartContext)

    const [count, setCount] = useState(1)
    const [exist, setExist] = useState(false)
    
    const noExist = () => {
        setExist(false)
    }
    
    const handleCart = () => {
        addToCart({...prod,count})
        setExist(true)
    }

    const add = () => {
        if (count < max){
            setCount(count + 1)
            prod.count = count
        }
    }

    const subst = () => {
        if (count > 1){
            setCount(count - 1)
            prod.count = count
        }
    }

    return (
            <>
            {exist ? 
                <div className="finish">
                    <button type="button" className ="finBtn" onClick={noExist}>Agregar más?</button>
                    <Link className ="finBtn" to="/cart">Terminar Compra</Link>
                </div>
                :
                <div className="checkout">
                    <div className="counterCont">
                        <div className="counter">
                            <button type = "button" className="minus" onClick={subst}><FaMinus/></button>
                            <p className="count">{count}</p>  
                            <button type="button" className="plus" onClick={add}><FaPlus/></button>
                        </div>
                    </div>
                    <div className="addBtn">     
                        <button type="button" className="addTo" onClick={handleCart}>Agregar al carrito</button>
                    </div>
                </div>
            }
            </>
    )
}
