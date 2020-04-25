import React, { Component } from 'react'
import axios from 'axios'
import Files from './file.js'
import Form from './form.js'

class Uploads extends Component {
    constructor(props)  {
      super(props);
      this.state = {
        files: []
      }
    }

    getFiles = () => {
      axios.get('https://infinite-dusk-19119.herokuapp.com/api/dog')
      .then(res =>  {
        this.setState({ files: res.data })
      }).catch(err => console.log(err));
    }

    handleCreate = (createData) => {
      this.props.modalChange();
      fetch('https://infinite-dusk-19119.herokuapp.com/api/dog', {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(createdPost => {
      return createdPost.json()
    }).then(jsonedPost => {
      this.setState(prevState => {
        prevState.files = jsonedPost
        return {
          files: prevState.files
        }
      })
    }).catch(err => console.log(err))
  }



  componentDidMount() {
    this.getFiles();
  }

  render()  {
    return (
      <React.Fragment>
      <div className={this.props.modalState ? "blurUploads" : "uploads"}>
        <div className="fileHold">
          <div className="uploadMe" onClick={this.props.modalChange}>
            <h2>Found a dog?<br/> Click Me!</h2>
          </div>
          {this.state.files.map((fileData) => (
            <Files key={fileData.id}
            fileData={fileData} />
          ))}
        </div>
      </div>
      <Form
        modalState={this.props.modalState}
        handleCreate={this.handleCreate}
        formInputs={this.props.formInputs}/>
      </ React.Fragment>
    )
  }
}




export default Uploads;
