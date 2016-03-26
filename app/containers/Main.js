import React from 'react'

import GetLocationContainer from 'containers/GetLocationContainer'
import styles from 'styles/index'

const Main = (props) => {
  return (
    <div>
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
