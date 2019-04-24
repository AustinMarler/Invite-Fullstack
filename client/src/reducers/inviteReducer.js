const initialState = {
  personData: {}
}

export default function (state = initialState, action) {
  switch(action.type) {
    case "GET_PERSON_DATA":
      var first = action.data.results[0].name.first.charAt(0).toUpperCase() + action.data.results[0].name.first.substr(1);
      var last = action.data.results[0].name.last.charAt(0).toUpperCase() + action.data.results[0].name.last.substr(1);
      return {...state, personData: {
        name: first + " " + last,
        phone: action.data.results[0].phone,
        email: action.data.results[0].email,
        picture: action.data.results[0].picture.large
      }}
    default:
      return state
  }
}