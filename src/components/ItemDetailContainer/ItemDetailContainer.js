import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import {db} from '../../firebase/config'
import { collection, getDocs } from 'firebase/firestore'

export const ItemDetailContainer = () => {

    const { itemId } = useParams()
    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)

    useEffect(()=>{
        setLoading(true)
        const prodsDb = collection(db, 'productos')
        getDocs(prodsDb)
            .then(res => {
                setItem(res.docs.map((doc) => ({...doc.data(), id: doc.id})).find( prod => prod.id === itemId))
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div className={loading ? "load" : "detailBody"}>
            {loading ? <h2>Cargando...</h2> : <ItemDetail {...item}/>}
        </div>
    )
}