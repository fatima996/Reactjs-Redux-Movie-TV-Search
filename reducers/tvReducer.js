function handleTv (state, action) {
  switch (action.type) {
      case 'REQUEST':
        return {
          isFetching: true,
          tvs: []
        }
      case 'RECEIVE':
        const tvData = action.response.data.results
        
        return {
          isFetching: false,
          tvs: tvData.slice(0,10)
        }
        case 'SEARCH':
        return {
          isFetching: true,
          tvs: []
        }
      case 'RECEIVE_SEARCH':
        const sData = action.response.data.results
        
        return {
          isFetching: false,
          tvs: sData
        }


        
      case 'REQUEST_DETAILS':
        return {
          isFetching: true,
          tvs: []
        }
      case 'RECEIVE_DETAILS':
        const tvDetails = action.response.data
        
        return {
          isFetching: false,
          tvs: tvDetails
        }
    default:
      return state
  }
}

function tvReducer (state = {}, action) {
  return Object.assign({}, state, handleTv(state, action))
}

export default tvReducer