import React, { PropTypes } from 'react'

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

  getForecast(location) {
    Weather.get5DayForecast(location).then((response) => {
      this.setState({
        isLoading: false,
        forecast: response.data,
      })
    })
  },

  contextTypes: {
    router: PropTypes.object.isRequired,
  },

  componentDidMount() {
    this.getForecast(this.props.routeParams.location)
  },

  componentWillReceiveProps(nextProps) {
    this.getForecast(nextProps.routeParams.location)
  },

  getInitialState() {
    return {
      isLoading: true,
    }
  },

  handleClick(weather) {
    this.context.router.push({
      pathname: `/detail/${this.props.routeParams.location}`,
      state: {
        weather: weather,
      },
    })
  },

  render() {
    return this.isLoading()
      ? <Loading/>
      : <Forecast forecast={this.forecast()} handleClick={this.handleClick} />
  },
})

export default ForecastContainer
