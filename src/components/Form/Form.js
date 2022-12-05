import React, { Component } from "react";
import '.Form/css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return (
    <form>
      <input
        placeholder="title"
        value={this.state.title}
        name="title"
        type="text"
        onChange={this.handleChange}
      />
      <input
        placeholder="description"
        value={this.state.description}
        name="description"
        type="text"
        onChange={this.handleChange}
      />
      <button>Submit</button>
    </form>
    )
  }
}

export default Form