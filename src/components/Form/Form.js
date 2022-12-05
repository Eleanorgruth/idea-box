import React, { Component } from "react";
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      title: "", 
      description: "",
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  submitIdea = (event) => {
    event.preventDefault()
    const newIdea = {
      id: Date.now()
      ...this.state
    }
    this.props.addIdea(newIdea)
  
  }
  render() {
    return (
    <form>
      <input
        placeholder="title"
        value={this.state.title}
        name="title"
        type="text"
        onChange={(event)=> this.handleChange(event)}
      />
      <input
        placeholder="description"
        value={this.state.description}
        name="description"
        type="text"
        onChange={(event) => this.handleChange(event)}
      />
      <button onClick={()=> this.submitIdea()}>Submit</button>
    </form>
    )
  }
}

export default Form