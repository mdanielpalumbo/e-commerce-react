import {React , useEffect, useState} from 'react'
import {Item} from './Item'
import {ItemList} from './ItemList'
import {dataCollector} from '../../data/dataCollector'
export const ItemListContainer = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        setLoading(true)
        dataCollector()
            .then(res => {
                setData(res)
            })
            .finally(()=> {
                setLoading(false)
            })
    },[])
    return(
        <>
        <div className="prodBody">
            {loading ? <h2 className="loading">Cargando...</h2>:
            <ItemList stock={data}/>}
        </div>
        </>
    )
}



