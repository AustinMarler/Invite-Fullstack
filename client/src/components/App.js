import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Invite from './Invite'
import '../styles/base.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="app">
            <Route exact path="/" component={Invite} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App