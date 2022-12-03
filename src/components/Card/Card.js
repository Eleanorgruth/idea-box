import React from 'react'
import './Card.css'

const Card = ({title, releaseDate, picture}) => {
  return (
    <section className='card'>
      <img className='picture' src={picture} alt={title}/>
      <h2>{title}</h2>
      <p>{releaseDate}</p>
    </section>
  )
}

export default Card