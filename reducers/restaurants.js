function restaurants(state = {}, action) {
    switch (action.type) {
      case 'SET_RESTAURANT_LIST': {
        return {...state, ...action.payload}
      }
      case 'SET_PICKUP_LOCATION': {
        return {...state, ...action.payload}
      }
      case 'SET_SELECTED_USR': {
        return {...state, selectedUser: action.payload.user}
      }
      default:
        return state
    }
  }
  
  export default restaurants;