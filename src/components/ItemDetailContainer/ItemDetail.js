import {React, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const ItemDetail = ({id,model,category,img,manufacturer,socket,price,count}) => {

    const {addToCart,cart} = useContext(CartContext)

    const handleCart = () => {
        addToCart({id,model,category,img,manufacturer,socket,price,count})

        console.log("agregado")
    }
    return (
        <>
            <h2 className="title"><Link to="/" className="link">productos</Link> &gt; <Link className="link" to={`/category/${category}`}>{category}</Link> &gt; {model}</h2>
            <div className="detail">
                <div className="detImgCont">
                    <img src={img} alt="product detail"></img>
                </div>
                <div className="detInfo">
                    <p>Fabricante: {manufacturer}</p>
                    <p>Socket: {socket}</p>
                    <p>Precio: {price}</p>
                    <button type="button" className="addToCart" onClick={handleCart}>Agregar al carro</button>
                </div>
            </div>
        </>
    )
}