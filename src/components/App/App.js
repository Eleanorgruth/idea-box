import React, { Component } from "react"
import ideasArray from "../../data"
import Form from "../Form/Form"
import Ideas from "../Ideas/Ideas"
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: ideasArray
    }
  }
  addIdea = (newIdea) => {
    this.setState({ideas: [...this.state.ideas, newIdea]})
  }
  deleteIdea = (id) => {
    const ideasArra = this.state.ideas.filter((idea) => {
      return idea.id != id 
    })
    this.setState({ideas: ideasArra})
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