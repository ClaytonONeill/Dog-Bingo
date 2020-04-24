import React, { Component } from 'react'



class BoardSquare extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      checked: [],
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      check5: false,
      check6: false,
      check7: false,
      check8: false,
      check9: false,
      check10: false,
      check11: false,
      check12: false,
      check13: false,
      check14: false,
      check15: false,
      check16: false,
      check17: false,
      check18: false,
      check19: false,
      check20: false,
      check21: false,
      check22: false,
      check23: false,
      check24: false,
      check25: false,
    }
  }

  activate = (event) => {
    this.state.checked.push(event.target.id);
    event.currentTarget.style.background="pink";
  }


  render()  {

  const createBoard = () => {

    let board = []

    for (let i = 0; i < 1; i++) {
      let children = []
        for (let j = 1; j <= 25; j++) {
          children.push(<div id={j} onClick={this.activate} className="piece"><h2>{this.props.data[Math.floor(Math.random () * this.props.data.length)]}</h2></div>)
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
