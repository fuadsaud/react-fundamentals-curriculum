import React, { PropTypes } from 'react'

import Day from 'components/Day'

const styles = {
  day: {
    listStyle: 'none',
    margin: 30,
    textAlign: 'center',
  },
  days: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 60,
    padding: 0,
  },
  locationName: {
    color: '#777',
    fontSize: '3em',
    fontWeight: 100,
    textAlign: 'center',
  },
}

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

  propTypes: {
    forecast: PropTypes.object.isRequired,
  },

  render() {
    console.log('FORECAST')

    return (
      <section className="forecast">
        <h2 style={styles.locationName}>{this.locationName()}</h2>

        <ul style={styles.days}>
          {this.days().map((day) => {
            return (
              <li key={day.dt} style={styles.day}>
                <Day conditions={day}/>
              </li>
            )
          })}
        </ul>
      </section>
    )
  },
})

export default Forecast
