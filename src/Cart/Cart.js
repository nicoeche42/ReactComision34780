import React from "react"
import { CartContext }from '../../context/CartContext'
import { useContext } from "react"


const Cart = () => {
const  { cart } = useContext(CartContext)

console.log(cart, 'llego?' ) 
    
return(
   <div>
    {
        cart.map(prod => (
            <div>{prod.name}</div>
        ))
        
    }
    
   </div>
   
)

}


export default Cart