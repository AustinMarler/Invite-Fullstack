import React, { Component } from 'react'
import { getGoing } from '../actions/actions';
import { connect } from 'react-redux'

class Going extends Component {
  componentDidMount() {
    getGoing()
  }

  render() {
    return (
      <div>
        {
          this.props.going.map(person => (
          <div className="personContainer">
            <div id="personPicContainer" className="grayBG">
              <img alt="" src={person.picture} />
            </div>
            <div id="personInfoContainer" className="grayBG">
              <span className="personInfo"><span className="bold">Name:</span> {person.name}</span>
              <span className="personInfo"><span className="bold">Phone:</span> {person.phone}</span>
              <span className="personInfo"><span className="bold">Email:</span> {person.email}</span>
            </div>
          </div>
          ))
        }
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    going: appState.going
  }
}

export default connect(mapStateToProps)(Going)