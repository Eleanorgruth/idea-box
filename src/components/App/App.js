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
  componentDidMount() {
    fetch("http://localhost:3001/items")
      .then(res => res.json())
      .then(data => {
        console.log("DATA". data)
        this.setState({ideas: data})})
  }
//   componentDidUpdate() {
//     fetch("http://localhost:3001/items")
//     .then(res => res.json())
//     .then(data => {
//       console.log("DATA". data)
//   })
// }
  render() {
    return (
      <main>
        <h1>Shopping List</h1>
        <Form />
        <Ideas ideas={this.state.ideas}/>
      </main>
    )
  }
}

export default App