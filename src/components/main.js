import React, { Component } from 'react'
import BoardSquare from './boardsquare.js'


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
    }
  }

  fetchDogs = () => {
    fetch(`${baseUrl}`)
    .then(data=>data.json())
    .then(jData=> {
      this.setState({breedData:jData.message})
    }).catch(err=>console.log(err))
}



componentDidMount() {
  this.fetchDogs()
}


render()  {

const dogs = Object.keys(this.state.breedData)

  return(
      <React.Fragment>
        <BoardSquare data={dogs} />
      </React.Fragment>
    )
  }
}

export default Main;
