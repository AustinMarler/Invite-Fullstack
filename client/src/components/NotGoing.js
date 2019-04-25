import React, { Component } from 'react'
import { getNotGoing } from '../actions/actions';
import { connect } from 'react-redux'

class NotGoing extends Component {
  componentDidMount() {
    getNotGoing()
  }

  render() {
    return (
      <div>
        {
          this.props.notGoing.map(person => (
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
    notGoing: appState.notGoing
  }
}

export default connect(mapStateToProps)(NotGoing)