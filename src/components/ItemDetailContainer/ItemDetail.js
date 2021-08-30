import React from 'react'
import { Link } from 'react-router-dom'
import  swal  from 'sweetalert'
export const ItemDetail = ({model,category,img,manufacturer,socket,price,}) => {
    const addToCart = () => {
        swal("El producto ha sido agregado correctamente")
    }
    return (
        <>
            <h2 className="title"><Link to="/" className="link">productos</Link> -&gt; <Link className="link" to={`/category/${category}`}>{category}</Link> -&gt; {model}</h2>
            <div className="detail">
                <div className="detImgCont">
                    <img src={img} alt="product detail"></img>
                </div>
                <div className="detInfo">
                    <p>Fabricante: {manufacturer}</p>
                    <p>Socket: {socket}</p>
                    <p>Precio: {price}</p>
                    <button type="button" className="addToCart" onClick={addToCart}>Agregar al carro</button>
                </div>
            </div>
        </>
    )
}