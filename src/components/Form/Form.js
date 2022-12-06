import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '', 
      amount: ''
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  render() {
    return (
      <form>
        <input
          placeholder='Item Name'
          name='name'
          type='text'
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
        />
         <input
          placeholder='Item Amount'
          name='amount'
          type='text'
          value={this.state.amount}
          onChange={(event) => this.handleChange(event)}
        />
        <button>
          Add Item
        </button>
      </form>
    )
  }
}

export default Form