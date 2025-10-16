import React from 'react'
//import './Book.css'
const Book = ({img, place_name, market_name}) => {
  return (
    <div>
        <div className="main">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <h3>{place_name}</h3>
                <h4>{market_name}</h4>

            </div>
        </div>
    </div>
  )
}

export default Book