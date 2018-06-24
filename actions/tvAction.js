import axios from 'axios'


const apiProps = {
  url: '',
  params: {},
  types: {
    request: '',
    receive: ''
  }
}

function shouldFetchData({ tv }) {
  return !tv.tvs || !tv.isFetching
}

function fetchDispatch(opts) {


  return dispatch => {
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
      }
    }
    dispatch({ type: opts.types.request }, config)
    return axios
      .get(opts.url, {
        params: opts.params
      })
      .then(response => {
        // Dispatch the recevied action with type and data
        const obj = opts.onReceived ? opts.onReceived(response) : { response }
        return dispatch(Object.assign({ type: opts.types.receive }, obj))
      })
      .catch(error => dispatch({ type: 'RESET_ERROR_MESSAGE' }))

  }
}

function fetchMovie() {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      apiProps.url = 'https://api.themoviedb.org/3/tv/top_rated?api_key=9dd0443589af0dc500baa06c8b00e960&language=en-US&page=1'
      apiProps.types.request = 'REQUEST'
      apiProps.types.receive = 'RECEIVE'
      return dispatch(fetchDispatch(apiProps))
    }
  }
}
function SearchMovie(w) {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      apiProps.url = 'https://api.themoviedb.org/3/search/tv?api_key=9dd0443589af0dc500baa06c8b00e960&language=en-US&page=1&include_adult=false&query=' + w
      apiProps.types.request = 'SEARCH'
      apiProps.types.receive = 'RECEIVE_SEARCH'
      return dispatch(fetchDispatch(apiProps))
    }
  }
}


function fetchOne(one) {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      apiProps.url = 'https://api.themoviedb.org/3/tv/' + one + '?api_key=9dd0443589af0dc500baa06c8b00e960&language=en-US'
      apiProps.types.request = 'REQUEST_DETAILS'
      apiProps.types.receive = 'RECEIVE_DETAILS'
      return dispatch(fetchDispatch(apiProps))
    }
  }
}



export default { fetchMovie, fetchOne, SearchMovie }