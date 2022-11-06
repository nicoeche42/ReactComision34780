import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
/* import { getProductById } from '../../asyncMock' */
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    console.log(productId)

    useEffect(() => {

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(response => {
            console.log(response)
            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted)

        }).finally(() => {
            setLoading(false)
        })

    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail  {...product} />
        </div>
    )
}

export default ItemDetailContainer