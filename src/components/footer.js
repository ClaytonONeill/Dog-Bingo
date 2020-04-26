import React, { Component } from 'react'

class Footer extends Component {
  render()  {
    return  (
      <React.Fragment>
      <div className="footer">
        <div className="listContain">
          <div className="listOne">
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>More Information</li>
            </ul>
          </div>
          <div className="listTwo">
            <ul>
            <li>Shelter Data</li>
            <li>Legal</li>
            <li>End of the world?</li>
            </ul>
          </div>
        </div>
      </div>
      </React.Fragment>
    )
  }
}




export default Footer;
