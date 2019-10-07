import React from 'react'

const Quote = ({ data }) => {
  return (
    <div className="quote">
      <h1>{data.phrase}</h1> 
      <p>{data.author}</p>
    </div>
  )
}

export default Quote