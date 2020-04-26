import React, { Component } from 'react'
import axios from 'axios'
import Board from './board.js'
import Uploads from './uploadSquares.js'


let baseUrl = '';

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'https://dog.ceo/api/breeds/list/all'
} else {
  baseUrl = 'https://dog.ceo/api/breeds/list/all'
}


class Main extends Component  {
  constructor(props)  {
    super(props);
    this.state = {
      breedData: {},
      showmodal: false
    }
  }

  modalShow = (event) => {
    this.setState({
      breedData: this.state.breedData,
      showmodal: !this.state.showmodal
    })
  }

  getDogs = () => {
    axios.get(`${baseUrl}`)
    .then(res => {
      this.setState({breedData: res.data.message})
        }).catch(err=>console.log(err))
  }


componentDidMount() {
      this.getDogs();
  }


render()  {

  const dogs = Object.keys(this.state.breedData)

  return(
      <React.Fragment>
        <Uploads
          modalState={this.state.showmodal}
          modalChange={this.modalShow}
          formInputs={this.props.formInputs}
        />
        <Board
          modalState={this.state.showmodal}
          data={dogs} />
      </React.Fragment>
    )
  }
}

export default Main;
