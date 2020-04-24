import React, { Component } from 'react';
import Main from './components/main.js'
import Header from './components/header.js'

class App extends Component  {
  constructor(props)  {
    super(props);
    this.state = {
      view: {
        page: 'home',
        pageTitle: 'Dog-Bingo'
      },
      formInputs: {
        breed: null,
        image: null,
        location: null
      }
    }
  }

    handleView = (view, postData) => {
        let pageTitle = '';
        let formInputs = {
          breed: '',
          image: '',
          location: '',
          id: null
        }
        switch (view) {
          case 'home':
            pageTitle = 'Dog-Bingo'
            break
          case 'uploadDog' :
            pageTitle = 'Submit a dog?'
            break
          case 'updateDog' :
            pageTitle = 'Updating Submission'
            formInputs = {
              breed: postData.breed,
              image: postData.image,
              location: postData.location,
              id: postData.id
            }
            break
          default:
            break
        }
        this.setState({
          view: {
            page: view,
            pageTitle: pageTitle
          },
          formInputs: formInputs
        })
      }


  render()  {
    return(
        <div>
          <Header />
          <Main view={this.state.handleView}/>
        </div>
    )
  }
}

export default App;
