import React from "react"
import './Card.css'

const Card = ({title, description, id, deleteIdea}) => {
  return (
    <div className="card">
      <p>title: {title} </p>
      <p>idea: {description}</p>
      <button onClick={() => deleteIdea(id)}>Delete</button>
    </div>

  )
}

export default Card