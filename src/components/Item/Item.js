import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price }) => {
    console.log(id)

    const handleClick = (e) => {
        console.log('hice click en item')
        e.stopPropagation()
    }

    return (
        <article className="CardItem" onClick={handleClick}>
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
                    Precio: ${price}
                </p>
            </section>           
            <footer className='ItemFooter'>
               <Link to={`/detail/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item