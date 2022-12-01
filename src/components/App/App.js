import React, { Component } from "react"
import './App.css'
import movieData from "../../movieData"
import Ideas from '../Ideas/Ideas'
import Banner from '../Banner/Banner'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <div>
        <h1 className="App">Movie</h1>
        {/* <Banner movieData={this.state.movies}/> */}
        <Ideas movieData={this.state.movies}/>
      </div>
    )
  }
}

export default App