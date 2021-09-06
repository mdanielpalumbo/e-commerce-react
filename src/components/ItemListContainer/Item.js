import { React } from 'react'
import { Link } from 'react-router-dom'
export const Item = ({id, manufacturer,model,socket,price,img}) => {
    return (
    <>
        <Link to={`/detail/${id}`} className="prodLink">
            <div className="prodCard">
                <div className="imgContainer">
                    <img src={img} alt="product miniature"/>
                </div>
                <div className="prodDesc">
                    <h4>{manufacturer} {model}</h4>
                    <p>socket: {socket}</p>
                    <p className="price">$ {price}</p>
                    <button className="detailBtn" type="button">Detalle</button>
                </div>
            </div>
        </Link>
    </>
    )
}

