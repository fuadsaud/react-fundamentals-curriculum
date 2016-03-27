import React from 'react'

import GetLocationContainer from 'containers/GetLocationContainer'

const styles = {
  mainContainer: {
    fontFamily: '"Open Sans" Helvetica Arial sans',
  },
  mainHeader: {
    backgroundColor: 'orange',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    overflow: 'auto',
  },
}

const Main = (props) => {
  return (
    <div style={styles.mainContainer}>
      <header style={styles.mainHeader}>
        <h1 style={{ color: 'white' }}>Bad Weather</h1>

        <GetLocationContainer/>
      </header>

      <section style={styles.mainBg}>
        {props.children}
      </section>
    </div>
  )
}

export default Main
