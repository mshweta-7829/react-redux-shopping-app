import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'



function ItemDetails({ item }) {
  console.log("inside details")
  const products = useSelector(store => store.products)
  const { id } = useParams();
 
  const { name, description, image_url, price } = item || products[id]
  

  return (
    <div className="ItemDetails">
      <h2>{name}</h2>
      <img src={image_url} alt={name}></img>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  )
}

export default ItemDetails