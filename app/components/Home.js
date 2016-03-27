import React from 'react'

import GetLocationContainer from 'containers/GetLocationContainer'

const styles = {
  mainBg: {
    backgroundImage: 'url(/app/images/pattern.svg)',
    height: '100vh',
    overflow: 'auto',
  },
}

const Home = () => {
  return (
    <div style={styles.mainBg}>
      <h2>Enter a location</h2>

      <GetLocationContainer/>
    </div>
  )
}

export default Home
