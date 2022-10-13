import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { Link } from 'react-router-dom'

const NavBAR = () => {
    return (
        <nav className="container-nav">
        <div>
          <a href="http://localhost:3000/">
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
          <button className='ButtonNav'>
          <Link to={'/category/alfajores/'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Afajores</Link>
          </button>
          <button className='ButtonNav'>
          <Link to={'/category/budines'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Budines</Link>
          </button>
          <button className='ButtonNav'>
          <Link to={'/category/cookies'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cookies</Link>
          </button>
          <button className='ButtonNav'>
          <Link to={'/category/facturas'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Facturas</Link>
          </button>
        </div>
        <CartWidget />
      </nav>
    )
}

export default NavBAR