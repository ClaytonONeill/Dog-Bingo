import React, { Component } from 'react'


class Square extends Component {
  constructor(props)  {
    super(props);
  }

  activate = (event) => {
    this.props.dogArray.push(event.target.id);
    event.currentTarget.style.background="#F7C331";
    if (this.props.dogArray.length >= 5)  {
      this.props.change();
    }
  }

  render()  {

    return  (
      <React.Fragment>
        <div onClick={this.activate} className="piece"><h2>{this.props.data}</h2></div>
      </React.Fragment>
    )
  }
}


export default Square;
