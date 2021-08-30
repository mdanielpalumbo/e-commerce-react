import { React , useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { dataCollector } from '../../data/dataCollector'
import { useParams } from 'react-router'

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const {catId} = useParams()
    
    useEffect(() => {
        setLoading(true)
        dataCollector()
            .then(res => {
                const filtered = res.filter( prod => prod.category === catId)
                {catId ? setData(filtered) : setData(res)}
            })
            .finally(()=> {
                setLoading(false)
            })
    },[catId])

    return(
        <>
        <div className="prodBody">
            {loading ? <h2 className="loading">Cargando...</h2>:
            <ItemList stock={data}/>}
        </div>
        </>
    )
}



