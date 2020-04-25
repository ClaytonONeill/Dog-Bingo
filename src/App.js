import React, { Component } from 'react'
import Header from './components/header.js'
import Uploads from './components/uploadSquares.js'
import Main from './components/main.js'


class App extends Component  {
  constructor(props)  {
    super(props);
    this.state = {
      view: {
        page: 'home',
        pageTitle: 'Dog-Bingo'
      }
    }
  }



  render()  {
    return(
        <div>
          <Header />
          <Uploads/>
          <Main
          view={this.state.view}
          />
        </div>
    )
  }
}

export default App;
