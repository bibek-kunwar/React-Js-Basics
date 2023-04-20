import React from 'react'
import Card from './Card'
import links from '../Sdata'
const ArrMap = () => {

  return (
    <>
      <h1 className="Movie_Name">List of Avengers</h1>
      {links.map((val, index) => {
        console.log(links);
        return (
          <Card
            key={val.id}
            Imgscr={val.Imgscr}
            Title={val.Title}
            Sname={val.Sname}
            Link={val.Links}
          />
        )
      }) }
    </>
  )
}

export default ArrMap