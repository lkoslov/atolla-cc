import React from 'react'
import SearchBar from './search_bar'
import WeatherDetails from './weather_details'
import '../styles/app.css'

const App = () => (
  <div className="app">
    <div className="title">Atolla Weather App</div>
    <SearchBar />
    <WeatherDetails />
  </div>
)

export default App
