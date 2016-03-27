import React from 'react'

import Day from 'components/Day'

const styles = {
  textAlign: 'center',
}

const kToC = (k) => Math.round(k) - 273

const Detail = (props) => {
  return (
    <section className="detail" style={styles}>
      <Day day={props.weather} />

      <div>
        <p>{props.location}</p>
        <p>{props.weather.weather[0].description}</p>
        <p>{kToC(props.weather.temp.min)}℃ / {kToC(props.weather.temp.max)}℃</p>
        <p>humidity: {props.weather.humidity}</p>
      </div>
    </section>
  )
}

export default Detail
