import React, {PropTypes} from 'react'

const GetLocation = (props) => {
  return (
    <form onSubmit={props.onSubmitLocation}>
      <input type="text" name="location" onChange={props.onUpdateLocation}/>

      <input type="submit" value="Get weather info"/>
    </form>
  )
}

GetLocation.propTypes = {
  onUpdateLocation: PropTypes.func.isRequired,
  onSubmitLocation: PropTypes.func.isRequired,
}

export default GetLocation
