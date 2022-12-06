import React, { Component } from "react"

// import ideasArray from "../../data"
import Ideas from "../Ideas/Ideas"
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
    fetch("http://localhost:3001/ideas")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ideas: data})})
  }
  addIdea = (newIdea) => {
    this.setState({ideas: [...this.state.ideas, newIdea]})
  }
  deleteIdea = (id) => {
    fetch(`http://localhost:3001/ideas/${id}`, {
      method: 'DELETE'
    })
      .then(res=>res.json())
      .then(res => 
        this.setState({ideas: res})
    )

    // this.setState({ideas: ideasArra})
  }

  render() {
    return (
      <main>
        <h1>IdeaBox</h1>
        <Form addIdea={this.addIdea}/>
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea}/>
      </main>

    )
  }
}

export default App