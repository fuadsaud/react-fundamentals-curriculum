import React from 'react'
import { Link } from 'react-router'

import GetLocationContainer from 'containers/GetLocationContainer'

const styles = {
  mainContainer: {
    fontFamily: '"Open Sans" Helvetica Arial sans',
  },
  mainHeader: {
    backgroundColor: 'orange',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 30,
    overflow: 'auto',
  },
  mainH: {
    color: 'white',
    margin: 0,
  }
}

const Main = (props) => {
  return (
    <section id="main" style={styles.mainContainer}>
      <header style={styles.mainHeader}>
        <Link to="/">
          <h1 style={styles.mainH}>Bad Weather</h1>
        </Link>

        <GetLocationContainer/>
      </header>

      <section id="content" style={styles.mainBg}>
        {props.children}
      </section>
    </section>
  )
}

export default Main
