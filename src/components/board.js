import React, { Component } from 'react'
import BoardSquare from './boardsquare.js'



class Board extends Component {
  constructor(props)  {
    super(props);
  }





  render()  {
    return  (
      <React.Fragment>
        <div className="theBoard">
          <BoardSquare data={this.props.data} />
        </div>
      </React.Fragment>
    )
  }
}


export default Board;
