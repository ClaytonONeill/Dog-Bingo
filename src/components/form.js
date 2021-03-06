import React, { Component } from 'react'


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
          <input
          type="text"
          id="breed"
          value={this.state.breed}
          onChange={this.handleChange}
          /><br/>
          <label>Image</label><br/>
          <input
          type="text"
          id="image"
          value={this.state.image}
          onChange={this.handleChange}/><br/>
          <label>Location</label><br/>
          <input
          type="text"
          id="location"
          value={this.state.location}
          onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
        <button id="modalButton" onClick={this.props.modalChange}>X</button>
      </div>
    )
  }
}


export default Form;
