import { React , useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { useParams } from 'react-router'
import { collection, getDocs, where,query } from 'firebase/firestore'
import {db} from '../../firebase/config'
export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const {catId} = useParams()
    

    useEffect(() => {
        const prodsDb = collection(db, 'productos')
        setLoading(true)    
        if (catId) {
            const filteredDb = query(collection(db,'productos'), where('category', '==', catId))
            getDocs(filteredDb)
            .then((res) => {
                const products = res.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setData(products)
            })
            .finally(()=> {
                setLoading(false)
        })} else {
            
            getDocs(prodsDb)
            .then((res) => {
                const products = res.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setData(products)
            })
            .finally(()=> {
                setLoading(false)
            })
        }
        return(() => {})
    }, [catId, setLoading])

    return(
        <div className="prodBody">
            {loading ? <h2 className="loading">Cargando...</h2>:
            <ItemList stock={data}/>}
        </div>
    )
}



