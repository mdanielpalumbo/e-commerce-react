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
        <div>
            {loading ? <h2>Cargando...</h2>:
            <ItemList stock={data}/>}
        </div>
        </>
    )
}



