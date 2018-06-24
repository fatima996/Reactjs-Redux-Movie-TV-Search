import React, { Component } from 'react'
import { Container, Segment, Button, Divider, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'
import { history } from 'react-router'
import { connect } from 'react-redux'
import axios from 'axios'
import Header from './Header'
import { bindActionCreators } from 'redux'


import { tvAction } from '../actions'

class tvDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tvs: []

    }
    this.props = props
    console.log(this.props.match.params.id)
  }
  componentWillMount() {
    this.props.actions.fetchOne(this.props.match.params.id)
      .then(response => this.setState({ tvs: response.data }))

  }

  goBack(props) {
    this.props.history.goBack();
  }


  render() {
    const poster = "https://image.tmdb.org/t/p/w185/" + this.props.tvs.poster_path

    return (
      <div>
        <Container>



          <Segment>
            <Button floated='right' onClick={this.goBack.bind(this)}>Back</Button>

            <Divider section />
            <Image size='medium'  centered src={poster} />
            <Divider section />
            Movie NAme: {this.props.tvs.name}
            <Divider section />
            Rating: {this.props.tvs.vote_average}
            <Divider section />
            Overview: {this.props.tvs.overview}
            <Divider section />
            First Air Date: {this.props.tvs.first_air_date}
            <br/>
            
            
          </Segment>




        </Container>
      </div>
    )
  }
}
const mapStateToProps = ({ tv }) => tv
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        tvAction
      ),
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(tvDetails)