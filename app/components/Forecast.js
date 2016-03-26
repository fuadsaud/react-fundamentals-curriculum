import React from 'react'

export default class Forecast extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.routeParams.playerOne}</h2>
      </div>
    )
  }
}

export default Forecast
