import React from "react";
import './Ideas.css'
import Card from '../Card/Card'

const Ideas = ({ideas, deleteItem}) => {
  const ideasArray = ideas.map((idea)=>{
    return (
      <Card
        deleteItem={deleteItem}
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