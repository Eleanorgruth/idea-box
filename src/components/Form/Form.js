import React, { Component } from "react";
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      description: ""
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  render() {
    return (
     <form>
      <input
        type="text"
        placeholder="title"
        name="title"
        value={this.state.title} 
        onChange={this.handleChange}
      />
      <input
        type="text"
        placeholder="description"
        name="description"
        value={this.state.description}  
        onChange={this.handleChange}
      />
      <button>Submit</button>
     </form>
    )

  }
}

export default Form