import React, { Component } from 'react'


class BoardSquare extends Component {
  constructor(props)  {
    super(props);
  }

  activate = (event) => {
    event.currentTarget.style.background="#F7C331";
  }

  render()  {

    return  (
      <React.Fragment>
        <div onClick={this.activate} className="piece"><h2>{this.props.data}</h2></div>
      </React.Fragment>
    )
  }
}


export default BoardSquare;
