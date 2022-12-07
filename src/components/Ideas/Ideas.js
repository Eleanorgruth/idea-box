import React from "react";
import './Ideas.css'
import Card from '../Card/Card'

const Ideas = ({ideas}) => {
  const ideasArray = ideas.map((idea)=>{
    return (
      <Card
        item={idea.name}
        amount={idea.amount}
        id={idea.id}
        key={idea.id}
        />
    )
  })
return (
  <div>
    <h2>list items</h2> 
    {ideasArray}
  </div>
)
}

export default Ideas