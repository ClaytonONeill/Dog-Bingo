import React, { Component } from 'react'
import axios from 'axios'


class Form extends Component  {

  fileUploadHandler = () => {
    axios.post()
  }



  render()  {
    return(
      <div className={this.props.showCheck ? "modalShow" : "modal"}>
        <h1>Form</h1>
      </div>
    )
  }
}


export default Form;
