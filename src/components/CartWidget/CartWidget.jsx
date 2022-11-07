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

}

export default CartWidget