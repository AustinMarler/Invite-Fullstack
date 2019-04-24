import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPersonData } from '../actions/actions';

class Invite extends Component {
  componentDidMount() {
    getPersonData()
  }

  render() {
    return (
      <div id="mainInviteContainer">
        <div id="innerInviteContainer">
          <div id="goingOrNotContainer">
            <span>Going: #</span>
            <span>Not Going: #</span>
          </div>
          <div id="personPicContainer" className="grayBG">
            <img alt="" src={this.props.picture} />
          </div>
          <div id="personInfoContainer" className="grayBG">
            <span className="personInfo"><span className="bold">Name:</span> {this.props.name}</span>
            <span className="personInfo"><span className="bold">Phone:</span> {this.props.phone}</span>
            <span className="personInfo"><span className="bold">Email:</span> {this.props.email}</span>
          </div>
          <div id="yesOrNoContainer" className="grayBG">
            <button type="button" id="isGoingButton">&#10003;</button>
            <button type="button" id="isNotGoingButton">&#10007;</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    name: appState.personData.name,
    phone: appState.personData.phone,
    email: appState.personData.email,
    picture: appState.personData.picture
  }
}

export default connect(mapStateToProps)(Invite)