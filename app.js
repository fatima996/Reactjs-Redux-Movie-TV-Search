import React from 'react'
import ReactDOM from 'react-dom'

import { connect } from 'react-redux'
import { resetErrorMessage } from './actions'

import tvComponent from './components/tvComponent'
import movieComponent from './components/movieComponent'
import { BrowserRouter, Route } from 'react-router-dom'
import movieDetails from './components/movieDeatils';
import tvDetails from './components/tvDetails';


class App extends React.Component {
  constructor (props) {
    super()
    this.props = props
    console.log(props)
  }
  componentWillMount () {
    //call load session
  }

  render () {
    return (
      <BrowserRouter>
        <Route
          render={props => (
            <div>
              <Route location={location} path='/' exact component={movieComponent} />
              <Route location={location} path='/movies' exact component={movieComponent} />
              <Route location={location} path='/tvs' exact component={tvComponent} />
              <Route location={location} path='/movieDetails/:id' exact component={movieDetails} />
              <Route location={location} path='/tvDetails/:id' exact component={tvDetails} />


            </div>
          )}
        />
      </BrowserRouter>
    )
  }
}

export default connect(
  state => ({
    errorMessage: state.errorMessage,
   }),
  { resetErrorMessage: resetErrorMessage}
)(App)
