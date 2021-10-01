import { React , useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { useParams } from 'react-router'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { FaCog } from 'react-icons/fa'
import "animate.css"

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
                console.log(res)
                const products = res.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setData(products)
            })
            .finally(()=> {
                setTimeout(() => {
                setLoading(false)
                },500)
            })
        }
        return(() => {})
    }, [catId, setLoading])

    return(
        <div className={loading ? "load": "prodBody  animate__animated animate__fadeInDownBig"}>
            {loading ? <div className="loading  animate__animated animate__fadeInDownBig"><FaCog className="spinner"/></div>:
            <ItemList stock={data}/>}
        </div>
    )
}



