import React from 'react'

import GetLocationContainer from 'containers/GetLocationContainer'

const Home = () => {
  return (
    <div style={{ overflow: 'auto' }}>
      <h2>Enter a location</h2>

      <GetLocationContainer/>
    </div>
  )
}

export default Home
