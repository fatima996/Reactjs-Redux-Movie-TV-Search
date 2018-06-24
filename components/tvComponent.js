import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'
import { Button, Form, Segment, Card, Container, Input } from 'semantic-ui-react'
import '../style/style.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import $ from 'jquery'


import { tvAction } from '../actions'

class tvComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tvs: []
    }
    this.props = props
  }

  componentWillMount() {
    this.props.actions.fetchMovie()
      .then(response => this.setState({ tvs: response.data }))

  }

  handleSearchChange(event) {
    if (event.target.value.length > 2) {
      const searchTerm = event.target.value
      this.preformSearch(searchTerm)
    }

  }
  preformSearch(searchTerm) {
    this.props.actions.SearchMovie(searchTerm)
      .then(response => this.setState({ tvs: response.data }))

    /*axios.get('https://api.themoviedb.org/3/search/tv?api_key=9dd0443589af0dc500baa06c8b00e960&language=en-US&page=1&include_adult=false&query='+ searchTerm )
      .then(response => this.setState({tvs: response.data}))
      console.log(this.props.tvs)*/
  }


  render() {
    return (
      <div >
        <Segment>
          <Header />
        </Segment>
        <Segment color='olive'>
          <Input focus icon='search' className="input"
            type="text"
            name="search"
            placeholder="Search a TV show"
            onChange={this.handleSearchChange.bind(this)}
          />
        </Segment>
        <Segment className="flex-container">
        
          {this.props.tvs.map((item, key) => {
            const poster = "https://image.tmdb.org/t/p/w185/" + item.poster_path
            return (
                <Card className="flex-item" key={key}
                  image={poster}
                  href={'/tvDetails/' + item.id}
                  meta={item.title}
                  description={item.vote_average}
                /> 
            )
          })
          }

        </Segment>
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
export default connect(mapStateToProps, mapDispatchToProps)(tvComponent)