import { createStore } from 'redux'

import reducer from './reducers/inviteReducer'

const store = createStore(reducer)

export default store