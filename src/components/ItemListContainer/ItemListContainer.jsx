import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId).then(response => {
      setProducts(response)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setLoading(false)
    })
  }, [categoryId])

  useEffect(() => {
    const onResize = (e) => console.log(e)

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      console.log('removi event listener')
    }
  }, [])
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