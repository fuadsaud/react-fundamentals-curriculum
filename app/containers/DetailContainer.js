import React from 'react'

import Detail from 'components/Detail'

const DetailContainer = React.createClass({
  render() {
    return (
      <Detail
        weather={this.props.location.state.weather}
        location={this.props.routeParams.location} />
    )
  },
})

export default DetailContainer
