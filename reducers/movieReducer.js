function handleMovie (state, action) {
    switch (action.type) {
        case 'REQUEST':
          return {
            isFetching: true,
            movies: []
          }
        case 'RECEIVE':
          const movieData = action.response.data.results
          
          return {
            isFetching: false,
            movies: movieData.slice(0,10)
          }
          case 'SEARCH':
          return {
            isFetching: true,
            movies: []
          }
        case 'RECEIVE_SEARCH':
          const sData = action.response.data.results
          
          return {
            isFetching: false,
            movies: sData
          }

  
          
        case 'REQUEST_DETAILS':
          return {
            isFetching: true,
            movies: []
          }
        case 'RECEIVE_DETAILS':
          const movieDetails = action.response.data
          
          return {
            isFetching: false,
            movies: movieDetails
          }
      default:
        return state
    }
  }
  
  function movieReducer (state = {}, action) {
    return Object.assign({}, state, handleMovie(state, action))
  }
  
  export default movieReducer