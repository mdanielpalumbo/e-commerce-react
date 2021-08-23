import React, {UseState, UseEffect} from 'react'
import {Item} from './Item'
export const ItemList = ({stock =[]}) => {
    return (
        <>
            <h2>
                Productos
            </h2>
            <div>
                {stock.map((prod) => <Item {...prod}/>)}
            </div>
        </>
    )
}