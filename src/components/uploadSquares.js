import React, { Component } from 'react'
import axios from 'axios'
import Files from './file.js'
import Form from './form.js'

class Uploads extends Component {
    constructor(props)  {
      super(props);
      this.state = {
        files: [],
        showmodal: false
      }
    }

    getFiles = () => {
      axios.get('https://infinite-dusk-19119.herokuapp.com/api/dog')
      .then(res =>  {
        this.setState({ files: res.data })
      }).catch(err => console.log(err));
    }


    modalShow = () => {
      this.setState({
        showmodal: true
      })
    }

  componentDidMount() {
    this.getFiles();
  }

  render()  {
    return (
      <React.Fragment>
      <div className="uploads">
        <div className="fileHold">
          <div className="uploadMe" onClick={this.modalShow}>
            <h2>Found a dog?<br/> Click Me!</h2>
          </div>
          {this.state.files.map((fileData) => (
            <Files key={fileData.id}
            fileData={fileData} />
          ))}
        </div>
      </div>
      <Form showCheck={this.state.showmodal} />
      </ React.Fragment>
    )
  }
}




export default Uploads;
