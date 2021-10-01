import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { FaTrash, FaMinus, FaPlus, FaOrcid } from 'react-icons/fa'
import { useEffect } from 'react/cjs/react.development'
import swal from 'sweetalert'
import {Link} from 'react-router-dom'

export const Cart = () => {

    const { cartDelete, cart, total, totalPrice, setCount, prodCount} = useContext(CartContext)


    const add = ({prod}) => {
        if(prod.count< prod.stock){
            prod.count ++
            setCount(prod.count)
        }    
    } 

    const subst = ({prod}) => {
        if (prod.count > 1){
            prod.count --
            setCount(prod.count)
        }
    }
    useEffect(() => {
        totalPrice()
    },[prodCount])
    return (
        <div className="cartBody">
            <h2 className="cartTitle"> CARRITO </h2>
            <div className = "cartCont">
                { cart.length === 0 ? 
                        <div className="empty">
                            <h2>el carrito está vacio</h2>
                            <p>Vuelve cuando elijas algo de la lista de <Link className="backLink"to="/">productos</Link></p>
                        </div> 
                    :
                        <div className="cardsCont">
                            {cart.map((prod) => (
                                <div key={prod.id} value={cart.indexOf(prod)}className="cartCard">
                                    <div className="cartImgCont">
                                        <img alt="product" src={prod.img}/>
                                    </div>
                                    <p className="model">{prod.model}</p>
                                    <div className="cCountCont">    
                                        <div className="cCounter">
                                            <button type = "button" className="minus" onClick={() => subst({prod})}><FaMinus/></button>
                                            <p className="count">{prod.count}</p>  
                                            <button type="button" className="plus" onClick={() => add({prod})} ><FaPlus/></button>
                                        </div>
                                    </div>
                                    <span className="price">
                                        <p>{prod.price*prod.count}</p>
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
                    {cart.length === 0 ? <div className="disable"><p>finalizar</p></div> 
                    :<Link to="/checkout" className="finaliseLink">
                    <div className="finalise">
                        <p>finalizar</p>
                    </div>
                    </Link> }
                    
                </div>
            </div>
        </div>
    )
}
