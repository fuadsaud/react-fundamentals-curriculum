import React from 'react'

import Weather from 'lib/Weather'

import Loading from 'components/Loading'
import Forecast from 'components/Forecast'

const ForecastContainer = React.createClass({
  forecast() {
    return this.state.forecast
  },

  isLoading() {
    return this.state.isLoading
  },

  location() {
    return this.props.routeParams.location
  },

  componentDidMount() {
    const weather = Weather.get5DayForecast(this.location()).then((response) => {
      console.log(response)

      this.setState({
        isLoading: false,
        forecast: response.data,
      })
    })
  },

  getInitialState() {
    return {
      isLoading: true,
    }
  },

  render() {
    return this.isLoading()
      ? <Loading/>
      : <Forecast forecast={this.forecast()}/>
  },
})

export default ForecastContainer
