import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './ItemsList.css'
import {add, remove} from './actions'
import {Link} from "react-router-dom"

function ItemsList() {
  console.log("inside itemsList")
  const products = useSelector(store => store.products)
  const count = useSelector(store => store.count)
  const cart = useSelector(store => store.cart)
  console.log("products", products)
  console.log("cart", cart)
  const dispatch = useDispatch()

  function addItemToCart(evt){
    dispatch(add(evt.target.id))
  }

  function removeItemFromCart(evt){
    dispatch(remove(evt.target.id))
  }

  return (
    <div className="ItemsList">
      <Link to="/cart"><h2>Your cart has {count} items</h2></Link>
      {
        Object.entries(products).map(([key, item]) =>
          <div key={key} className="card">
            <div className="card-header">
              <h4 className="card-title">{item.name}</h4>
            </div>
            <div className="card-body">
              <Link to={`./products/${key}`}><img className="ml-auto mr-auto" src={item.image_url} alt={item.name}></img></Link>
              <div className="buttons">
                <button className="btn btn-primary" id={key} onClick={addItemToCart}>Add</button>
                <button className="btn btn-primary" id={key} onClick={removeItemFromCart}>Remove</button>
              </div>
            </div>
          </div>)
      }
    </div>
  )

}
export default ItemsList