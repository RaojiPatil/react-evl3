import React from 'react'
import './data.css'

const Show = (props) => {
    let data = props.movie
  return (
    <div className="container">
        <img src={data.image_url}/>
       <h3> {data.movie_name}</h3>
        </div>
  )
}

export default Show