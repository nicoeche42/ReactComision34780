import React, { useState } from "react"
import cart from './assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    const [contador, setContador] = useState(0);
    return (
        <div>
            <button className="bg-transparent hover:border-transparent active:text-gray-600" onClick={() => setContador(contador + 1)}>
                <i className="fa-solid fa-cart-shopping p-2"></i>
                <img className='imgCard' src={cart} alt='cart' />
            </button>
            <span className='margenCarrito'>{contador}</span>
        </div>
    )
}

export default CartWidget