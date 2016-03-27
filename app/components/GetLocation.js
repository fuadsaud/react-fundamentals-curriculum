import React, {PropTypes} from 'react'

const GetLocation = (props) => {
  return (
    <form className="form-inline form-group" onSubmit={props.onSubmitLocation}>
      <input className="form-control" type="text" name="location" onChange={props.onUpdateLocation}/>

      <input className="btn btn-primary" type="submit" value="Get weather info"/>
    </form>
  )
}

GetLocation.propTypes = {
  onUpdateLocation: PropTypes.func.isRequired,
  onSubmitLocation: PropTypes.func.isRequired,
}

export default GetLocation
