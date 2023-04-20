import React from 'react'

const Hellow = () => {
  function bibek() {
    alert("Hey welcome from bibek kunwar")
  }
  return (
    <>
      <h1>hellow world </h1>
      { /* code between curely braces is js parts and orther is html parts*/}
      <h1>10+10</h1>
      <h1>{10 + 10}</h1>
      { /* click events and function*/}
      <button onClick={bibek}>button </button>
      { /*hide and show */}
      <h1>hide and show</h1>

      {/* transfer data from one componets to another  components */}
      <div className="card">
        <img src="https://i.pinimg.com/736x/f5/38/09/f53809793189d307543a6bae79bed995--hd-backgrounds-romances.jpg" alt="" className="card_img"/>
        <div className="card_catagorey"> love daires world
          <div className="card_title"> First love
            <a href="https://youtu.be/HRhJVGjIraE" target="blank" class>
            <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>


    </>
  )
}

export default Hellow