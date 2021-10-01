import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {FaTruck} from 'react-icons/fa'
import {Counter} from '../Counter/Counter'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore'
import {db} from '../../firebase/config'
import "animate.css"

export const ItemDetail = ({specs, item, load}) => {
    const prod = {...item}
    console.log(prod)
    console.log(specs)
    
    return (
        <>  { specs ?
            <>
            <div className="detTitCont">
                <h2 className="detTitle"><Link to="/" className="link">productos</Link> &gt; <Link className="link" to={`/category/${prod.category}`}>{prod.category}</Link> &gt; {prod.model}</h2>
            </div>
            <div className="detail animate__animated animate__fadeInDownBig">
                <div className="prodDet">
                    <div className="leftHalf">
                        <div className="pDetTitCont">
                            <h2 className="prodDetTitle">
                                {prod.manufacturer} {prod.model}
                            </h2>
                        </div>
                        <div className="detImgCont">
                            <div className="picsCrumb">

                            </div>
                            <img src={prod.img} alt="product detail"></img>
                        </div>
                    </div>
                    <div className="rightHalf">
                        <div className="detInfo">
                            <div className="rightRow price">
                                <p className="price">$ {prod.price}</p>
                            </div>
                            <div className="rightRow">
                                <p>Stock: {prod.stock}</p>
                            </div>
                            <div className="rightRow">
                                <FaTruck className="delivery"/><p> Envíos en 10 días hábiles.</p>
                            </div>
                            <Counter 
                                max = {prod.stock}
                                prod = {prod}
                            />
                        </div>
                    </div>
                </div>
                <div className="specsContainer">
                    <h3 className="specsTitle">especificaciones</h3>
                    <div className="specs">
                        {specs.map((doc) => {
                            return(
                                <div className="specClass" key={doc.id}>
                                    <h4 className="specTitle">{doc.id}</h4>
                                    <div>
                                        {[...Object.entries(doc)].map(([key, value]) => 
                                            {if (value != doc.order && value != doc.id){
                                                return(
                                                <div className="spec" key={key}>
                                                    <p className="key">{key}:</p> <p className="value">{value}</p>
                                                </div>)
                                            }}
                                        )}
                                    </div>
                                </div>
                            )
                        })} 
                    </div>
                </div>
            </div>
            </>
            :
            <></>
        }
        </>
    )
}