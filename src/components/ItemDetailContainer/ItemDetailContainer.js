import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import { dataCollector } from '../../data/dataCollector'
export const ItemDetailContainer = () => {

    const { itemId } = useParams()
    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)

    useEffect(()=>{
        setLoading(true)
        dataCollector()
            .then ( res => {
                setItem( res.find( prod => prod.id === parseInt(itemId)))
            })
            .finally(()=> {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div className={loading ? "load" : "detailBody"}>
            {loading ? <h2>Cargando...</h2> : <ItemDetail {...item}/>}
        </div>
    )
}