import { useState, useEffect } from 'react';
import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { NavLink } from 'react-router-dom'
import { getDocs, collection, query, orderBy } from 'firebase/firestore';
import { db } from '../../service/firebase';

const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const collectionRef = query(collection(db, 'categories'), orderBy('order'))

    getDocs(collectionRef).then(response => {

      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        const id = doc.id

        return { id, ...data }
      })
      setCategories(categoriesAdapted)
    })
  }, [])

  return (
    <nav className="container-nav">
      <div>
        <a href="https://accursiopasteleria.vercel.app/">
          <img
            src="https://solaccursiopasteleria.netlify.app/public/image/logoSol2.png"
            alt=""
            className="logo"
          />
          <span className="font-semibold text-gray-600 hover:text-purple-600">
            Sol Accursio Pasteleria
          </span>
        </a>

      </div>
      <div className="Categories">
        {
          categories.map(cat => (
            <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
          ))
          }
      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar