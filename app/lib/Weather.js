import axios from 'axios'

export default {
  get5DayForecast(location) {
    return axios.get(
      `http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&type=accurate&APPID=c864d3bf4bf14d40b5892918778d6df2&cnt=5`
    )
  },

  getCurrent(location) {
    return axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&type=accurate&APPID=c864d3bf4bf14d40b5892918778d6df2`
    )
  }
}
