import store from '../store'
import axios from 'axios'

export function getPersonData() {
  axios.get("https://randomuser.me/api/").then(resp => {
    store.dispatch({
      type: "GET_PERSON_DATA",
      data: resp.data
    })
  })
}

export function getGoing() {
  axios.get('/api/going').then(resp => {
    store.dispatch({
      type: "GET_GOING",
      payload: resp.data
    })
  })
}

export function getNotGoing() {
  axios.get('/api/notgoing').then(resp => {
    store.dispatch({
      type: "GET_NOT_GOING",
      payload: resp.data
    })
  })
}

export function going(person) {
  axios.post('/api/going', person).then(() => {
    getGoing()
  })
}

export function notGoing(person) {
  axios.post('/api/notgoing', person).then(() => {
    getNotGoing()
  })
}