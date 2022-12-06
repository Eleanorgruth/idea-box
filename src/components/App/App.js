import React, { Component } from 'react'
import Ideas from '../Ideas/Ideas'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }
  componentDidMount() {
    fetch("http://localhost:3001/items")
      .then(res => res.json())
      .then(data => this.setState({ideas: data}))
  }
  render() {
    return (
      <main>
        <h1>Shopping List</h1>
        <Ideas/>
      </main>
    )
  }
}

export default App