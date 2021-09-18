import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const addToCart = (prod) => {
        const exist = cart.some(s => s.id === prod.id)
        if (exist){
            const newCart = cart.map(s => {
                if(s.id === prod.id){
                    s.count = s.count + prod.count
                }
                return s
            })
            setCart(newCart)
        }else{
            setCart([...cart, prod])
        }
    }
    const cartDelete = (i) => {
        setCart(cart.filter(prod => prod.id !== i))
    }
    return (
        <CartContext.Provider value={{cart, addToCart, cartDelete}}>
            {children}
        </CartContext.Provider>
    )
}
