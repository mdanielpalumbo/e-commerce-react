import {React, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import {FaTruck} from 'react-icons/fa'
import {Counter} from '../Counter/Counter'

export const ItemDetail = ({id,model,category,img,manufacturer,socket,price,stock}) => {

    const prod = {id, model, category, img, manufacturer, socket, price, stock}
    
    return (
        <>
            <h2 className="detTitle"><Link to="/" className="link">productos</Link> &gt; <Link className="link" to={`/category/${category}`}>{category}</Link> &gt; {model}</h2>
            <div className="detail">
                <div className="prodDet">
                    <div className="leftHalf">
                        <h2 className="prodDetTitle">
                            {model}
                        </h2>
                        <div className="detImgCont">
                            <div className="picsCrumb">

                            </div>
                            <img src={img} alt="product detail"></img>
                        </div>
                    </div>
                    <div className="rightHalf">
                        <div className="detInfo">
                            <div className="rightRow price">
                                <p className="price">$ {price}</p>
                            </div>
                            <div className="rightRow">
                                <p>Stock: {stock}</p>
                            </div>
                            <div className="rightRow">
                                <FaTruck className="delivery"/><p> Envíos en 10 días hábiles.</p>
                            </div>
                            <Counter 
                                max = {stock}
                                prod = {prod}
                            />
                            
                        </div>
                    </div>
                </div>
                <div className="specs">

                </div>
            </div>
        </>
    )
}