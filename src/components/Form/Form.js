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

  clearInputs = () => {
    this.setState({name: '', amount: ''})
  }
  submitItem = (event) => {
    event.preventDefault()
    fetch("http://localhost:3001/items", {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/JSON'
      }
    })
    .then(res=> res.json())
    .then(data=> this.props.addItem(data))
    this.clearInputs()
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
        <button onClick={(event)=>this.submitItem(event)}>
          Add Item
        </button>
      </form>
    )
  }
}

export default Form