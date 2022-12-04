import React from "react";
import './Ideas.css'
import Card from '../Card/Card'

const Ideas = ({ ideas, deleteIdea }) => {
  const cards = ideas.map(idea => {
    return <Card 
    title={idea.title}
    key={idea.id}
    description={idea.description}
    id={idea.id}
    deleteIdea={deleteIdea}
    />
  })
  return (
    <div className='ideas'>
      {cards}
    </div>

  )
}

export default Ideas
