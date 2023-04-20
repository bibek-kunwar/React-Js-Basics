import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="Cards">
        <div className="Card">
        <img src="props.ImgScr" alt="profile" />
        <div className="Card_Info">
            <span className="Card_Catagory">{ props.Title}</span>
          <a href="props.Links">
            <button>Watch Now</button>
          </a>
          </div>
          </div>
    </div>
    </>
  )
}

export default Card