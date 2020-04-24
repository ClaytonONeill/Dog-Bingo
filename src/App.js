import React, { Component } from 'react';
import Main from './components/main.js'
import Header from './components/header.js'

class App extends Component  {
  render()  {
    return(
        <div>
          <Header />
          <Main />
        </div>
    )
  }
}

export default App;
