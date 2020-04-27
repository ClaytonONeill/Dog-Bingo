import React, { Component } from 'react'
import axios from 'axios'
import Square from './square.js'
import Uploads from './uploadSquares.js'
import Footer from './footer.js'


let baseUrl = 'https://dog.ceo/api/breeds/list/random/25';


class Main extends Component  {
  constructor(props)  {
    super(props);
    this.state = {
      breedData: [],
      showmodal: false,
      checked: [],
      bingo: false
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

  setTrue = () => {
    this.setState({
      bingo: true
    })
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
        <div className={this.state.bingo ? "show" : "hide"}><button>BINGO?</button></div>
        <div className={this.state.showmodal ? "blurBoard" : "boardContain"}>
          {this.state.breedData.map((dogData) => (
            <Square
            data={dogData}
            change={this.setTrue}
            dogArray={this.state.checked} />
          ))}
        </div>
        <Footer
        modalState={this.state.showmodal} />
      </React.Fragment>
    )
  }
}

export default Main;
