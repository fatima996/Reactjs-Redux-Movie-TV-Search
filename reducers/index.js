import { combineReducers } from 'redux'

import movie from './movieReducer'
import tv from './tvReducer'


// Updates error message to notify about the failed fetches.
function errorMessage (state = {}, action) {
  const { type, error } = action

  if (type === 'RESET_ERROR_MESSAGE') {
    return null
  } else if (error) {
    return action.errorMessage
  }

  return state
}

const rootReducer = combineReducers({
  
  errorMessage,
  movie,
  tv

})

export default rootReducer
