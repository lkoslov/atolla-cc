import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {convertKelvinToFahrenheit} from '../helpers'
import '../styles/weather_details.css'

const WeatherDetails = ({weather}) => {
  const {main, name} = weather

  let weatherImg
  let weatherDescription = weather.weather && weather.weather[0]['main']

  if (weatherDescription === 'Clear') {
    weatherImg = 'clear'
  } else if (weatherDescription === 'Clouds') {
    weatherImg = 'clouds'
  } else if (weatherDescription === 'Rain') {
    weatherImg = 'rain'
  } else if (weatherDescription === 'Snow') {
    weatherImg = 'snow'
  }

  return (
    <div className={`weather-detail-container ${weatherImg}`}>
      {
        (main && main.temp) ?
          <Fragment>
            <div>{name}</div>
            <div>{convertKelvinToFahrenheit(main.temp)} °F</div>
          </Fragment>
        :
          <div>Enter Zip Code</div>
      }
    </div>
  )
}


const mapStateToProps = ({weather}) => ({ weather })

export default connect(mapStateToProps)(WeatherDetails)
