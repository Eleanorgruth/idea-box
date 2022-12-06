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
    fetch('http://localhost:3001/ideas', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res=>res.json())
    .then(data=> {
      console.log(data)
      this.props.addIdea(data)
    })
    this.clearInputs()
  }
  clearInputs = () => {
    this.setState({title: "", description: ""})
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
      <button onClick={(event)=> this.submitIdea(event)}>Submit</button>
    </form>
    )
  }
}

export default Form