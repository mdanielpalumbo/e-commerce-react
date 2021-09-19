import React, {useContext, useState} from 'react'
import { Redirect } from 'react-router'
import { CartContext } from '../../context/CartContext'
import { newOrder } from '../../firebase/newOrder'
import Swal from 'sweetalert2'
export const Checkout = () => {
    const { cart, total, emptyCart } = useContext(CartContext)
    const [values, setValues] = useState({
        name: "",
        tel: "",
        email: ""
    })
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        newOrder(cart, values, total)
            .then(res => {
                Swal.fire({
                    icon:'success',
                    title: 'Compra realizada con éxito',
                    text: `Guarde este identificador:${res}`,
                    confirmButtonText:'Finalizar'
                })
                emptyCart()
            })
            .catch(err => alert(err))
    }
    return (
        <>  
            { cart.length === 0 ? <Redirect to="/"/> :
            <div className="checkoutBod">
                <div className="banner">
                    <h2 className="title">checkout</h2>
                </div>
                <div className="formBody">
                    <form className="checkForm" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={values.name}
                            onChange={handleInputChange}
                            name="name"
                            placeholder="nombre"
                            required
                        />
                        
                        <input
                            type="text"
                            value={values.tel}
                            onChange={handleInputChange}
                            name="tel"
                            placeholder="tel: 11-2032-0200"
                            required
                        />
                        
                        <input
                            type="email"
                            value={values.email} 
                            onChange={handleInputChange}
                            name="email"
                            placeholder="example@email.com"
                            required

                        />
                        <button type="submit">Realizar orden</button>
                    </form>
                </div>
            </div>
            }
        </>
    )
}
