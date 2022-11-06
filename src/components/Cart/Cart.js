import React from "react"
import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"


const Cart = () => {
    const { cart } = useContext(CartContext)

    return (
        <div>
            {
                cart.map(prod => (
                    <div>{prod.name}</div>
                ))

            }

        </div>

    )

}


export default Cart