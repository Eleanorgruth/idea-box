import React, { Component } from "react";
import './Form.css'

class Form extends Component {
  constructor(){
    super()
    this.state = {
      title: '',
      description: ''
    }
  }

  clearInputs = () => {
    this.setState({title: '', description: ''})
  }
  sumbitIdea = (event) => {
    event.preventDefault()
    const newIdea = {
      id: Date.now(),
      ...this.state
    }
    this.props.addIdea(newIdea)
    this.clearInputs()
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value })
  }
  render () {
    return(
      <form>
        <input
          name="title"
          placeholder="Title"
          value={this.state.title}
          onChange={(event)=>this.handleChange(event)}
          type="text"
        />
        <input
          name="description"
          placeholder="Description"
          value={this.state.description}
          onChange={(event)=>this.handleChange(event)}
          type="text"
        />
        <button onClick={(event)=>{this.sumbitIdea(event)}}>SUBMIT</button>
      </form>
    )
  }
}

export default Form