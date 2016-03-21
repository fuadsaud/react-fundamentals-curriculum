import React from 'react'

const Home = () => {
  return (
    <div>
      <p>Enter a location</p>
      <form>
        <input type="text" name="location"/>

        <button type="submit">Get weather info</button>
      </form>
    </div>
  )
}

export default Home
