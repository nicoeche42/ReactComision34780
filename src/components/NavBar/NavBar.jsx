import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';


const NavBAR = () => {
    return (
        <nav className="container-nav">
        <div>
          <img
            src="https://solaccursiopasteleria.netlify.app/public/image/logoSol2.png"
            alt=""
            className="logo"
          />
          <span className="font-semibold text-gray-600 hover:text-purple-600">
           Sol Accursio Pasteleria
          </span>
        </div>
        <div className="nav-paths text-purple-600">
          <a href="" className="navLinks hover:text-gray-600">
            Menu
          </a>
          <a href="" className="navLinks hover:text-gray-600">
            Tienda
          </a>
          <a href="" className="navLinks hover:text-gray-600">
            Galeria
          </a>
          <a href="" className="navLinks hover:text-gray-600">
            Nosotros
          </a>
          <a href="" className="navLinks hover:text-gray-600">
            Contacto
          </a>
        </div>
        <CartWidget />
      </nav>
    )
}

export default NavBAR