import React, { Component } from 'react'
import { Container, Segment, Button, Divider, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'
import { history } from 'react-router'
import { connect } from 'react-redux'
import axios from 'axios'
import Header from './Header'
import { bindActionCreators } from 'redux'


import { movieAction } from '../actions'

class movieDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: []

    }
    this.props = props
    console.log(this.props.match.params.id)
  }
  componentWillMount() {
    this.props.actions.fetchOne(this.props.match.params.id)
      .then(response => this.setState({ movies: response.data }))

  }

  goBack(props) {
    this.props.history.goBack();
  }


  render() {
    const poster = "https://image.tmdb.org/t/p/w185/" + this.props.movies.poster_path

    return (
      <div>
        <Container>



          <Segment>
            <Button floated='right' onClick={this.goBack.bind(this)}>Back</Button>

            <Divider section />
            <Image size='medium' circular centered src={poster} />
            <Divider section />
            Movie NAme: {this.props.movies.title}
            <Divider section />
            Rating: {this.props.movies.vote_average}
            <Divider section />
            Overview: {this.props.movies.overview}
            <Divider section />
            First Air Date: {this.props.movies.release_date}

          </Segment>




        </Container>
      </div>
    )
  }
}
const mapStateToProps = ({ movie }) => movie
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        movieAction
      ),
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(movieDetails)