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
    fontWeight: 100,
    textAlign: 'center',
  },
  forecastContainer: {
    overflow: 'auto',
  },
}

const Forecast = React.createClass({
  city() {
    return this.props.forecast.city
  },

  days() {
    return this.props.forecast.list
  },

  handleDetail(e) {
    e.preventDefault()

    this.context.router.push({
      pathname: '/detail/'
    })

  },

  locationName() {
    return `${this.city().name}, ${this.city().country}`
  },

  propTypes: {
    forecast: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
  },

  render() {
    console.log("FORECAST");
    return (
      <section className="forecast" style={styles.forecastContainer}>
        <h2 style={styles.locationName}>{this.locationName()}</h2>

        <ul style={styles.days}>
          {this.days().map((day) => {
            return (
              <li key={day.dt} style={styles.day}>
                <Day day={day} handleClick={this.props.handleClick.bind(null, day)} />
              </li>
            )
          })}
        </ul>
      </section>
    )
  },
})

export default Forecast
