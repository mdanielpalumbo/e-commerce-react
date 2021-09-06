import { createContext, useState } from 'react'




export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (prod) => {
        const exist = cart.some(s => s.id === prod.id)
        if (exist){
            const newCart = cart.map(s => {
                if(s.id === prod.id){
                    s.count ++
                }
                return s
            })
            setCart([...newCart])
        }else{
            prod.count = 1
            setCart([...cart, prod])
        }
    }
    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}