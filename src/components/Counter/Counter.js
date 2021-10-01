import React, { useContext, useState } from 'react'
import {FaPlus,FaMinus} from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import "animate.css"

export const Counter = ({max, prod}) => {

    const {addToCart,cart} = useContext(CartContext)

    const [count, setCount] = useState(1)
    const [exist, setExist] = useState(false)
    
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
    useEffect(()=>{
        if (cart.some(i => i.id === prod.id)){
            setExist(true)
        }
    },[cart, prod.id])
    
    return (
            <>
            {exist ? 
                <div className="finCont">
                    <div className="empty"></div>
                    <div className="finish">
                        <Link className ="finBtn" to="/cart">Terminar Compra</Link>
                    </div>
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
