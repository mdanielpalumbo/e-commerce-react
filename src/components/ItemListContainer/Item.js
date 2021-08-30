import React from 'react'
import { Link } from 'react-router-dom'
export const Item = ({id, manufacturer,model,socket,price,img}) => {
    return (
    <>
        <div className="prodCard">
            <div className="imgContainer">
                <img src={img} alt="product miniature"/>
            </div>
            <div className="prodDesc">
                <h4>{manufacturer} {model}</h4>
                <p>socket: {socket}</p>
                <p className="price">$ {price}</p>
                <Link to={`/detail/${id}`} className="detailBtn">Detalle</Link>
            </div>
        </div>
    </>
    )
}

