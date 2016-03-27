import React from 'react'

const Forecast = React.createClass({
  city() {
    return this.props.forecast.city
  },

  days() {
    return this.props.forecast.list
  },

  locationName() {
    return `${this.city().name}, ${this.city().country}`
  },

  render() {
    return (
      <section className="forecast">
        <h2>{this.locationName()}</h2>

        {this.days().map((day) => <Day conditions={day}/>)}
      </section>
    )
  },
})

export default Forecast
