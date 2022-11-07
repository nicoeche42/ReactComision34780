import {  useContext } from "react"
import './Checkout.css';
import { CartContext } from "../../Context/CartContext"
import { NotificationContext } from "../../notification/NotificationService"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../service/firebase"

const Checkout = () => {

    const { cart, total } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const createOrder = async () => {
        try {
            const objOrder = {
                buyer: {
                    name: 'Nicolas Echeverria',
                    phone: '123456',
                    mail: 'nicoecheok@gmail.com'
                },
                items: cart,
                total
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()
                
                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)
                
                setNotification('success', `El id de su orden es: ${orderAdded.id}`)
            }else {
               setNotification('error','hay productos que estan fuera de stock')
            }

        } catch (error) {
            console.log(error)
        }


    }




    return (
        <div>
            <h1>Checkout</h1>
            <h2>Formulario</h2>
            <button onClick={createOrder}>Generar orden</button>
        </div>
    )


}

export default Checkout


