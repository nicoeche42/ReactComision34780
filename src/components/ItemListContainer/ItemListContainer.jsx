import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)


  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    const collectionRef = categoryId
    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products')

    getDocs(collectionRef).then(response => {
        console.log(response)
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          console.log(data)

          return { id: doc.id, ...data }
        })

        setProducts(productsAdapted)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setLoading(false)
    })
  }, [categoryId])

 /*    useEffect(() => {
    const onResize = (e) => console.log(e)

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    } 
  }, [])  */
  if (loading) {
    return <h1>Cargando productos...</h1>
  }
  return (
    <div onClick={() => console.log('itemlistContainer')}>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer