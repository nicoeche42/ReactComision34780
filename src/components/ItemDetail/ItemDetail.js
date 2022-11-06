import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import { Link } from 'react-router-dom'
import { NotificationContext } from '../../notification/NotificationService'



const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
   
    const {addItem, isInCart} = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        addItem(productToAdd)
        setNotification('error', `Se agrego correctamente ${quantity} ${name}`)
    } 


    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
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
                <ItemCount onAdd={handleOnAdd} stock={stock}/>
            </footer>
        </article>
    )
}

export default ItemDetail