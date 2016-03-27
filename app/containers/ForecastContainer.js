import React from 'react'

import Forecast from 'components/Forecast'

const ForecastContainer = React.createClass({
  location() {
    return this.props.routeParams.location
  },
  render() {
    return (
      <section className="forecast">
        <Forecast location={this.location()}/>
      </section>
    )
  },
})

export default ForecastContainer
