import React from 'react'

import styles from 'styles/index'

const Main = (props) => {
  return (
    <div>
      <header>
        <h1>Bad Weather</h1>
      </header>

      <section style={styles.mainBg}>
        {props.children}
      </section>
    </div>
  )
}

export default Main
