import React, { Component } from 'react'



class BoardSquare extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      id: null
    }
  }


  render()  {

  const createBoard = () => {

    let board = []

    for (let i = 0; i < 1; i++) {
      let children = []
        for (let j = 1; j <= 25; j++) {
          children.push(<div className="piece"><h2 id={j}>{this.props.data[Math.floor(Math.random () * this.props.data.length)]}</h2></div>)
        }
        board.push(<div className="boardContain">{children}</div>)
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
