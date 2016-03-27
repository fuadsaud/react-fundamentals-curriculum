import React from 'react'

import GetLocationContainer from 'containers/GetLocationContainer'

const styles = {
  homeContainer: {
    backgroundImage: 'url(/app/images/pattern.svg)',
    height: '100vh',
    overflow: 'auto',
    textAlign: 'center',
  },
  header: {
    margin: 42,
  }
}

const Home = () => {
  return (
    <div style={styles.homeContainer}>
      <h2 style={styles.header}>Enter a location</h2>

      <GetLocationContainer/>
    </div>
  )
}

export default Home
