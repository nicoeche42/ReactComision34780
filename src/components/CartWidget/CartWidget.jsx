//import React, { useState } from "react"
import cart from './assets/cart.svg'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return(
        <Link to='/cart' className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg' />
            {totalQuantity}
        </Link>
    )


     
   /*  const [contador, setContador] = useState(0);
    return (
        <div>
            <button className="bg-transparent hover:border-transparent active:text-gray-600" onClick={() => setContador(contador + 1)}>
                <i className="fa-solid fa-cart-shopping p-2"></i>
                <img className='imgCard' src={cart} alt='cart' />
            </button>
            <span className='margenCarrito'>{contador}</span>
        </div>
    ) */
}

export default CartWidget