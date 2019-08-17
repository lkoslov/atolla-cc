import axios from 'axios'

const API_KEY = '4ef7e4ff9f5a602ce386acbea7d2d047'
const ROOT_URL = 'https://api.openweathermap.org/data/2.5/weather?zip='

export const FETCH_WEATHER = 'FETCH_WEATHER'

export const fetchWeather = (zip) => async dispatch => {
  let response = await axios.get(`${ROOT_URL}${zip},us&appid=${API_KEY}`)

  dispatch({ type: FETCH_WEATHER, payload: response })
}
