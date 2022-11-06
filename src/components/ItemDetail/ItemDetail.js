import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import { NotificationContext } from '../../notification/NotificationService'



const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const { addItem, isInCart, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        addItem(productToAdd, quantity)
        setNotification('succes', `Se agrego correctamente ${quantity} ${name}`)
    }

   /*  const quantityAdded = getProductQuantity(id) */

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>
            <footer className="ItemFooter">
                {
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    }
            </footer>
        </article>
    )
}

export default ItemDetail