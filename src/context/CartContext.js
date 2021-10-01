import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [prodCount, setCount] = useState(null)

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
    const [total ,setTotal] = useState(0)

    const emptyCart = () => {
        setCart([])
    }
    const totalPrice = () => {
        setTotal(cart.reduce((acc, prod) => parseInt(acc) + parseInt(prod.price*prod.count), 0))
    }
    return (
        <CartContext.Provider value={{cart, addToCart, cartDelete, total, totalPrice, emptyCart, prodCount, setCount}}>
            {children}
        </CartContext.Provider>
    )
}
