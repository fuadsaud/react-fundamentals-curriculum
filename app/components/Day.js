import React, { PropTypes } from 'react'
import moment from 'moment'

const styles = {
  calendar: {
    fontSize: '2em',
    fontWeight: 100,
  },
  weatherIcon: {
    height: 100,
  },
}

const Day = React.createClass({
  date() {
    return moment(this.props.day.dt * 1000)
  },

  calendar() {
    return this.date().format('dddd, MMM D')
  },

  icon() {
    return this.weather().icon
  },

  weather() {
    return this.props.day.weather[0]
  },

  propTypes: {
    day: PropTypes.shape({
      dt: PropTypes.number.isRequired,
      weather: PropTypes.array.isRequired,
    }).isRequired,
    handleClick: PropTypes.func,
  },

  render() {
    return (
      <div
        className='day'
        onClick={this.props.handleClick}
        style={this.props.handleClick ? { cursor: 'pointer' } : {}}>
        <img
          style={styles.weatherIcon}
          src={`/app/images/weather-icons/${this.icon()}.svg`}
          alt='Weather'/>

        <h3 style={styles.calendar}>{this.calendar()}</h3>
      </div>
    )
  },
})

export default Day
