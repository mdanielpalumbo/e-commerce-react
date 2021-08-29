import React from 'react'

export const Item = ({id, manufacturer,model,socket,price,img}) => {
    return (
    <>
        <div className="prodCard">
            <div className="imgContainer">
                <img src={img}/>
            </div>
            <div className="prodDesc">
                <h4>{manufacturer} {model}</h4>
                <p>socket: {socket}</p>
                <p className="price">$ {price}</p>
                <button className="detailBtn">Detalle</button>
            </div>
        </div>
    </>
    )
}

