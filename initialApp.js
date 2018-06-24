import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './app'
import configureStore from './store/configureStore'



const initialAppState = {
 
  
   movie:{
    isFetching:false,
    movies:[]
   },
   tv:{
     isFetching:false,
     tvs:[]
   },
 
  errorMessage: null
}

const store = configureStore(initialAppState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
