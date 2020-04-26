import React, { Component } from 'react'



class Files extends Component {
  constructor(props)  {
    super(props);
  }

render()  {
    return(
      <div className="eachFile" onDoubleClick={() => {this.props.deleteFile(this.props.fileData.id)}}>
          <img className="dogPics" src={this.props.fileData.image}/>
          <div className="dogInfo">
            <h3>{this.props.fileData.breed}</h3>
            <h4>{this.props.fileData.location}</h4>
        </div>
      </div>
    )
  }
}
export default Files;
