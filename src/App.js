import React, { Component } from 'react'
import Header from './components/header.js'
import Uploads from './components/uploadSquares.js'
import Main from './components/main.js'
import Footer from './components/footer.js'

class App extends Component  {
  constructor(props)  {
    super(props);
    this.state = {
      formInputs: {
        breed: null,
        image: null,
        location: null,
        id: null
      }
    }
  }



  render()  {
    return(
        <div>
          <Header />
          <Main
            formInputs={this.state.formInputs}
          />
          <Footer />
        </div>
    )
  }
}

export default App;
