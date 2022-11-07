import './Cart.css'
import React from "react"
import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"
 


const Cart = () => {
    const { cart, removeItem, total, clearCart } = useContext(CartContext)

    return (
        <div className='CarritoStyle'>
            <h1>Carrito Compras</h1>
            {
                cart.map(prod => (
                    <div>
                        {prod.name} - cantidad: {prod.quantity}
                        <button onClick={() => removeItem(prod.id)} className='ButtonCart'>remover</button>
                    </div>
                ))
            }
            <div>
                Precio total: {total}
            </div>

            <button onClick={() => clearCart()} className='ButtonCart'>Limpiar carrito</button>
        </div >

    )

}


export default Cart 
