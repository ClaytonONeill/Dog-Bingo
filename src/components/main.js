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
      bingo: false,
      wonGame: false
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

  winGame = () => {
    this.setState({
      wonGame: true
    })
  }

  goBack = () => {
    console.log('banes');
    this.setState({
      wonGame: false
    })
  }


componentDidMount() {
      this.getDogs();
  }


render()  {

  return(
      <React.Fragment>
        <div className={this.state.wonGame ? "winner" : "none"}>
          <h1>Congratulations!</h1>
            <h2>That's a bingo.</h2>
            <img src="http://24.media.tumblr.com/tumblr_m9umu7wfK51ruzepko1_500.gif"></img>
            <div className="buttons">
              <button className="new" onClick={() => window.location.reload()}>New Game?</button>
              <button className="new" onClick={this.goBack}>Go Back?</button>
            </div>
        </div>
        <Uploads
          win={this.state.wonGame}
          modalState={this.state.showmodal}
          modalChange={this.modalShow}
          formInputs={this.props.formInputs}
        />
        <div className={this.state.bingo ? "show" : "hide"}><button onClick={this.winGame}>BINGO?</button></div>
        <div id={this.state.wonGame ? "showNone" : null} className={this.state.showmodal ? "blurBoard" : "boardContain"}>
          {this.state.breedData.map((dogData) => (
            <Square
            data={dogData}
            change={this.setTrue}
            dogArray={this.state.checked} />
          ))}
        </div>
        <Footer
          win={this.state.wonGame}
          modalState={this.state.showmodal} />
      </React.Fragment>
    )
  }
}

export default Main;
