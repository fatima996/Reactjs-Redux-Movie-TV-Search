
import movieAction from './movieAction'
import tvAction from './tvAction'
function resetErrorMessage () {
  return { type: 'RESET_ERROR_MESSAGE' }
}

export {
  resetErrorMessage,
  movieAction,
  tvAction
  

}
