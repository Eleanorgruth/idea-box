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
  render() {
    return (
      <form>
        <input
          placeholder='Item Name'
          name='name'
          type='text'
          value={this.state.name}
          onChange={() => this.handleChange}
        />
         <input
          placeholder='Item Amount'
          name='amount'
          type='text'
          value={this.state.amount}
          onChange={() => this.handleChange}
        />
        <button>
          Add Item
        </button>
      </form>
    )
  }
}

export default Form