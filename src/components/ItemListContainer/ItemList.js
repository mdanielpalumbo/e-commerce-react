import React, {UseState, UseEffect} from 'react'
import {Item} from './Item'
export const ItemList = ({stock =[]}) => {
    return (
        <>
            <h2 className="prodTitle">
                Productos
            </h2>
            <div className="prodList">
                {stock.map((prod) => <Item {...prod}/>)}
            </div>
        </>
    )
}