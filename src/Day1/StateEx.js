import React, { useState } from 'react'

const StateEx = () => {
  const [data, setData] = useState("bibek")
  const [count, setCount] = useState(0)

  function update() {
    setData("kunwar")
  }
  function updateCount() {
    setCount(count+1)
  }
  function Dec() {
    setCount(count-1)
  }
  return (
    <>
      <h1>{data}</h1>

      <button onClick={update}>updata Data</button><br />

       <h2>{ count}</h2>
      <button onClick={updateCount}>update counter</button>

      
      <button onClick={Dec}>Decrement</button>
    </>
  )
}

export default StateEx