import React from "react"
import './Card.css'

const Card = ({item, amount, deleteItem, id}) => {
  return (
    <div>
      <p>Item: {item}</p>
      <p>Amount: {amount}</p>
      <button onClick={()=>deleteItem(id)}>🗑</button>
    </div>
  )
}

export default Card

