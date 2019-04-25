import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPersonData, going, notGoing, getGoing, getNotGoing } from '../actions/actions';

class Invite extends Component {
  componentDidMount() {
    getPersonData()
    getGoing()
    getNotGoing()
  }

  personGoing = (e) => {
    e.preventDefault()
    going({
      picture: this.props.picture,
      name: this.props.name,
      email: this.props.email,
      phone: this.props.phone
    })
    getPersonData()
  }

  personNotGoing = (e) => {
    e.preventDefault()
    notGoing({
      picture: this.props.picture,
      name: this.props.name,
      email: this.props.email,
      phone: this.props.phone
    })
    getPersonData()
  }

  render() {
    return (
      <div id="mainInviteContainer">
        <div id="innerInviteContainer">
          <div id="goingOrNotContainer">
            <span>Going: {this.props.goingCount}</span>
            <span>Not Going: {this.props.notGoingCount}</span>
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
            <button onClick={this.personGoing} type="button" id="isGoingButton">&#10003;</button>
            <button onClick={this.personNotGoing} type="button" id="isNotGoingButton">&#10007;</button>
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
    picture: appState.personData.picture,
    goingCount: appState.going.length,
    notGoingCount: appState.notGoing.length
  }
}

export default connect(mapStateToProps)(Invite)