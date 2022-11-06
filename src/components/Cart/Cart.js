import React from "react"
import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"


const Cart = () => {
    const { cart, removeItem, total, clearCart } = useContext(CartContext)

    return (
        <div>
            <h1>Carrito Compras</h1>
            {
                cart.map(prod => (
                    <div>
                        {prod.name} - cantidad: {prod.quantity}
                        <button onClick={() => removeItem(prod.id)}>remover</button>
                    </div>
                ))
            }
            <div>
                Precio total: {total}
            </div>

            <button onClick={() => clearCart()}>Limpiar carrito</button>
        </div >

    )

}


export default Cart