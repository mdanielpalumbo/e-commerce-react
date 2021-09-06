import { React, useState} from 'react'
import {Item} from './Item'
import {FaFilter, FaAngleLeft} from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'

export const ItemList = ({stock}) => {
    const [show, setShow] = useState(false)
    const clickShow = () => {
        setShow(!show)
    }
    const { catId } = useParams()
    return (
        <>  
            {show ? 
                <div className="filtersBody">
                    <div className="banner">
                        <h2 className="title">Filtros</h2>
                        <button className="backBtn" type="button" onClick={clickShow}><FaAngleLeft className="backIcon"/></button>
                    </div>
                    <div className="filters">
                        <Link className="filter" to="/category/motherboard">motherboards</Link>
                        <Link className="filter" to="/category/processor">procesadores</Link>
                    </div>
                </div>  
            :<>  
                <div className = "banner">
                    {/* <h2 className="title">productos</h2> */}
                    { catId ? <h2 className="title"><Link className="link" to="/">productos</Link> -&gt; {catId}</h2> : <h2 className="title">productos</h2>}
                    <button type="button" onClick={clickShow} className="filterBtn"><FaFilter className="filterIcon"/></button>
                </div>
                <div className="prodList">
                    {stock.map((prod) => <Item key={prod.id} {...prod}/>)}
                </div>
            </>
            }
        </>
    )
}