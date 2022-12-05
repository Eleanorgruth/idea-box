import React, { Component } from "react"

import ideasArray from "../../data"
import Ideas from "../Ideas/Ideas"
import Form from '../Form/Form'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: ideasArray
    }
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
        <Form />
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea}/>
      </main>

    )
  }
}

export default App