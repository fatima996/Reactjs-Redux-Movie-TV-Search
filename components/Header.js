import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button} from 'semantic-ui-react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { movieAction, tvAction } from '../actions'

class Header extends Component {
  constructor(props){
    super()
    this.props= props
    console.log(props)
  }

    render () {

      return (

        <Button.Group>
    <Button color='yellow'><Link to="/movies" >Movies</Link></Button>
    <Button.Or />
    <Button color='olive' ><Link to="/tvs" >TV Show</Link></Button>
  </Button.Group>
  
     )
   }
 }
//  export default Header

 function mapStateToProps (state) {
  return {
    movie: state.movie
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        movieAction,
        tvAction
      ),
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
