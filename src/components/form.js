import React, { Component } from 'react'
import axios from 'axios'


class Form extends Component  {
  constructor(props)  {
    super(props);
    this.state = {
      id: null,
      breed: '',
      image: '',
      location: ''
    }
  }

  handleChange = (e)  =>  {
    this.setState({[e.target.id] : e.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
      this.props.handleCreate(this.state)
  }


  render()  {
    return(
      <div className={this.props.modalState ? "modalShow" : "modal"}>
        <form onSubmit={this.handleSubmit}>
          <label>Breed</label><br/>
          <input type="text" /><br/>
          <label>Image</label><br/>
          <input type="text" /><br/>
          <label>Location</label><br/>
          <input type="text" /><br/>
          <input type="submit" id="sub"/>
        </form>
      </div>
    )
  }
}


export default Form;
