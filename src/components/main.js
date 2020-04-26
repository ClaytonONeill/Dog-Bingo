import React, { Component } from 'react'
import axios from 'axios'
import  BoardSquare from './boardSquare.js'
import Uploads from './uploadSquares.js'
import Footer from './footer.js'


let baseUrl = '';

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'https://dog.ceo/api/breeds/list/random/25'
} else {
  baseUrl = 'https://dog.ceo/api/breeds/list/random/25'
}


class Main extends Component  {
  constructor(props)  {
    super(props);
    this.state = {
      breedData: [],
      showmodal: false
    }
  }

  modalShow = (event) => {
    this.setState({
      showmodal: !this.state.showmodal,
    })
  }

  getDogs = () => {
    axios.get(`${baseUrl}`)
    .then(res => {
      this.setState({
        breedData: res.data.message
      })
        }).catch(err=>console.log(err))
  }


componentDidMount() {
      this.getDogs();
  }


render()  {

  return(
      <React.Fragment>
        <Uploads
          modalState={this.state.showmodal}
          modalChange={this.modalShow}
          formInputs={this.props.formInputs}
        />
        <div className={this.state.showmodal ? "blurBoard" : "boardContain"}>
          {this.state.breedData.map((dogData) => (
            <BoardSquare
            data={dogData} />
          ))}
        </div>
        <Footer
        modalState={this.state.showmodal} />
      </React.Fragment>
    )
  }
}

export default Main;
