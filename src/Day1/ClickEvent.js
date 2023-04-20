//click event and functions
import React from 'react'

const ClickEvent = () => {
  let data ="Bibek Kunwar"
  function apple() {
    alert("function callled")
  }
  return (
    <>
      <button onClick={apple}>Click me</button>
      <button onClick={() => alert("another way of calllingfunction")}>Click Second</button>
      <button onClick={() => apple()}>CLick Third</button>
      <br />
      <h1>{ data }</h1>

    </>
  )
}

export default ClickEvent