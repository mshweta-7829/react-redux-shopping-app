import React from "react"
import {useSelector} from 'react-redux'
import ItemDetails from "./ItemDetails"
 
function Cart(){
  console.log("inside cart")

  const cartItems = useSelector(store => store.cart)

  return(
    <div className="Cart">
      {Object.keys(cartItems).length > 0 ?
        Object.entries(cartItems).map(([key, value]) => (
          <ItemDetails key={key} item={value} />  )) : 
          <h2>No items</h2>}
    </div>
  )
}

export default Cart