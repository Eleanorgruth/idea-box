
import React, { Component } from 'react'
import Ideas from '../Ideas/Ideas'
import Form from '../Form/Form'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }
  addItem = (newIdea) => {
    console.log("NEWIDEA",newIdea)
    this.setState=({ideas: [...this.state.ideas], newIdea})
    console.log(this.state.ideas)
  }
  deleteItem = (id) => {
    fetch(`http://localhost:3001/items/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(res => this.setState({ideas: res}))
  }
  componentDidMount() {
    fetch(`http://localhost:3001/items`)
      .then(res => res.json())
      .then(data => {
        console.log("DATA". data)
        this.setState({ideas: data})})
  }
//   componentDidUpdate() {
//     fetch("http://localhost:3001/items")
//     .then(res => res.json())
//     .then(data => {
//       console.log("DATA", data)
//   })
// }
  render() {
    return (
      <main>
        <h1>Shopping List</h1>
        <Form addItem={this.addItem}/>
        <Ideas ideas={this.state.ideas} deleteItem={this.deleteItem}/>
      </main>
    )
  }
}

export default App