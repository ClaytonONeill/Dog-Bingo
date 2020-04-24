import React, { Component } from 'react'



class BoardSquare extends Component {

  render()  {

  const createBoard = () => {

    let board = []

    for (let i = 0; i < 1; i++) {
      let children = []
        for (let j = 0; j < 25; j++) {
          children.push(<h1>{this.props.data[Math.floor(Math.random () * this.props.data.length)]}</h1>)
        }
        board.push(<div>{children}</div>)
      }
    return board
  }



    return(
      <div>
          {createBoard()}
      </div>
    )
  }
}




export default BoardSquare;
