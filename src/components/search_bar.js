import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchWeather} from '../actions'
import '../styles/search_bar.css'

class SearchBar extends Component {
  state = { zip: '' }

  onFormSubmit = (e) => {
    e.preventDefault()

    this.props.fetchWeather(this.state.zip)

    this.setState({ zip: '' })
  }

  onInputChange = (e) => {
    this.setState({
      zip: e.target.value
    })
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.onFormSubmit}>
        <input
          value={this.state.zip}
          onChange={this.onInputChange}
          type="number"
          placeholder="Zip Code"
          className="zip-field"
        />
        <button className="search-button">Search</button>
      </form>
    )
  }
}

export default connect(null, {fetchWeather})(SearchBar)
