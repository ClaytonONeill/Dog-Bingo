import React, { Component } from 'react';
import Main from './components/main.js'

class App extends React.Component  {
  constructor(props)  {
    super(props)
    this.state = {

    }
  }

  render()  {
    return(
      <React.Fragment>
        <Main />
      </ React.Fragment>
    )
  }
}

export default App;
