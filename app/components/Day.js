import React, { PropTypes } from 'react'
import moment from 'moment'

const styles = {
  calendar: {
    color: '#777',
    fontSize: '2em',
    fontWeight: 100,
  },
  weatherIcon: {
    height: 100,
  },
}

const Day = React.createClass({
  conditions() {
    return this.props.conditions
  },

  date() {
    return moment(this.conditions().dt * 1000)
  },

  calendar() {
    return this.date().format('dddd, MMM D')
  },

  icon() {
    return this.weather().icon
  },

  weather() {
    return this.conditions().weather[0]
  },

  propTypes: {
    conditions: PropTypes.object.isRequired,
  },

  render() {
    console.log('DAY');

    return (
      <section className='day'>
        <img
          style={styles.weatherIcon}
          src={`/app/images/weather-icons/${this.icon()}.svg`}
          alt='Weather'/>

        <h3 style={styles.calendar}>{this.calendar()}</h3>
      </section>
    )
  },
})

export default Day
