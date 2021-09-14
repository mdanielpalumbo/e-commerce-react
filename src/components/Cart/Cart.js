import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa'
import { useEffect } from 'react/cjs/react.development'
import swal from 'sweetalert'

export const Cart = () => {

    const { cartDelete, cart} = useContext(CartContext)
    const [total,setTotal] = useState(0)
    const totalPrice = () => {
        setTotal(cart.reduce((acc, prod) => parseInt(acc) + parseInt(prod.price*prod.count), 0))
    }
    const finalise = () => {
        swal("COMPRA REALIZADA CON EXITO")
    }
    useEffect(() => {
        totalPrice()
    },[cart])
    return (
        <div className="cartBody">
            <h2 className="cartTitle"> CARRITO </h2>
            <div className = "cartCont">
                { cart.length === 0 ? 
                        <div className="cardsCont empty">
                            <h3>el carrito está vacio.</h3>
                            <p>vuelve cuando elijas un producto.</p>
                        </div> 
                    :
                        <div className="cardsCont">
                            {cart.map(prod => (
                                <div key={prod.id} value={cart.indexOf(prod)}className="cartCard">
                                    <div className="cartImgCont">
                                        <img alt="product" src={prod.img}/>
                                    </div>
                                    <p className="model">{prod.model}</p>
                                    <div className="cCountCont">    
                                        <div className="cCounter">
                                            <button type = "button" className="minus" ><FaMinus/></button>
                                            <p className="count">{prod.count}</p>  
                                            <button type="button" className="plus" ><FaPlus/></button>
                                        </div>
                                    </div>
                                    <span className="price">
                                        <p></p>
                                        {prod.price*prod.count}
                                    </span>    
                                    <button className="cartDelete" onClick={() => cartDelete(prod.id)}><FaTrash/></button>
                                </div>
                            ))}       
                        </div>
                }                   
                <div className="resume">
                    <h4 className="resumeTitle">resumen de compra</h4>
                    <span className="totalPrice">
                        <p className="totaltxt">total:</p>
                        {total}
                    </span>
                    <button className="finalise" onClick={finalise}>finalizar</button>
                </div>
            </div>
        </div>
    )
}
