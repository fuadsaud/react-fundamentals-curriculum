import React, {PropTypes} from 'react'

import GetLocation from 'components/GetLocation'

export default class GetCityContainer extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  location() { return this.state.location }

  handleUpdateLocation(e) {
    this.setState({ location: e.target.value })
  }

  handleSubmitLocation(e) {
    e.preventDefault()

    this.context.router.push({
      pathname: `/forecast/${this.location()}`
    })
  }

  render() {
    return (
      <GetLocation
        onSubmitLocation={this.handleSubmitLocation.bind(this)}
        onUpdateLocation={this.handleUpdateLocation.bind(this)}/>
    )
  }
}
