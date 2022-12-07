import React from "react"
import './Card.css'

const Card = ({item, amount}) => {
  return (
    <div>
      <p>Item: {item}</p>
      <p>Amount: {amount}</p>
    </div>
  )
}

export default Card