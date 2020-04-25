import React, { Component } from 'react'
import axios from 'axios'


class Form extends Component  {

  handleSubmit = () => {
    axios.post()
  }


  render()  {
    return(
      <div className={this.props.modalState ? "modalShow" : "modal"}>
      </div>
    )
  }
}


export default Form;
