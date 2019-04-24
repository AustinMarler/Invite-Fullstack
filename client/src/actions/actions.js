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