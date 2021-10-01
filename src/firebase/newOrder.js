import { db } from './config'
import { collection, Timestamp, addDoc, doc, updateDoc } from 'firebase/firestore'



export const newOrder = (cart, buyer, total) => {

    return new Promise((resolve,reject) => {
    const orders = collection(db, 'orders')
    const newOrder = {
        buyer: buyer,
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date())
    }
    cart.forEach((prod) => {
        const docRef = doc(db, 'productos', `${prod.id}`)
        updateDoc(docRef,
            {stock: prod.stock - prod.count})
    })
    addDoc(orders, newOrder)
        .then((res) => {resolve(res.id)})
        .catch((err) => {reject(err)})

    })
}