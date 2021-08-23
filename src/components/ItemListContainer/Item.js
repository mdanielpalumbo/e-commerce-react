import React from 'react'

export const Item = ({id, manufacturer,model,socket,price,img}) => {
    return (
    <div>
        <div className="imgContainer">
            {img}
        </div>
        <h3>{model}</h3>
        <p>{socket}</p>
        <p>{price}</p>
    </div>
    )
}

