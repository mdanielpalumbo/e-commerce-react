import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import {db} from '../../firebase/config'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { FaCog } from 'react-icons/fa'
import "animate.css"

export const ItemDetailContainer = () => {

    const { itemId } = useParams()
    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)
    const [specs, setSpecs] = useState(null)
    useEffect(()=>{
        setLoading(true)
        const prodsDb = collection(db, 'productos')
        getDocs(prodsDb)
            .then(res => {
                setItem(res.docs.map((doc) => ({...doc.data(), id: doc.id})).find( prod => prod.id === itemId))
                const gRef = query(collection(db,'productos', itemId, 'specs'),orderBy("order","asc"))
                getDocs(gRef)
                    .then(res => {
                        const specArr = res.docs.map((doc) => ({...doc.data(), id: doc.id}))
                        setSpecs(specArr)
                    })
                    .finally(() => {
                        setTimeout(() => {
                            setLoading(false)
                            },500)
                    })
            });
    }, [itemId])
    
    return (
        <div className={loading ? "load " : "detailBody"}>
            {loading ? <div className="loading animate__animated animate__fadeInDownBig"><FaCog className="spinner"/></div> : <ItemDetail specs={specs} item={item} load={loading} />}
        </div>
    )
}   