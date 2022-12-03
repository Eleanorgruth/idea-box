import React from "react"
import './Ideas.css'
import Card from '../Card/Card'

const Ideas = ({movieData}) => {
  console.log(movieData)
  
  const movieArray = movieData.map(movie => {
    return (
      <Card 
        title={movie.title}
        releaseDate={movie.release_date}
        picture={movie.poster_path}
        id={movie.id}
        key={movie.id}
      />
      )
    })
    return (
      <div className='ideas-container'>
        {movieArray}
      </div>
    )

   
}

export default Ideas