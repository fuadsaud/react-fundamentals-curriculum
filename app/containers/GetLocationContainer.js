import React, {PropTypes} from 'react'
import axios from 'axios'

import GetLocation from 'components/GetLocation'

export default class GetCityContainer extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  get5DayForecast() {
    return axios.get(
      `http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.location()}&type=accurate&APPID=c864d3bf4bf14d40b5892918778d6df2&cnt=5`
    )
  }
  getCurrentForecast() {
    return axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.location()}&type=accurate&APPID=c864d3bf4bf14d40b5892918778d6df2`
    )
  }

  location() { return this.state.location }

  handleUpdateLocation(e) {
    this.setState({ location: e.target.value })
  }

  handleSubmitLocation(e) {
    e.preventDefault()

    this.context.router.push({
      pathname: `/forecast/${this.location()}`
    })
  }

  render() {
    return (
      <GetLocation
        onSubmitLocation={this.handleSubmitLocation.bind(this)}
        onUpdateLocation={this.handleUpdateLocation.bind(this)}/>
    )
  }
}
