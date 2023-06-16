import React from 'react'
import './card.css'

function Card({id,title,desc}) {
  return (
    <>
        <p>ID: {id}</p>
        <h1>Title: {title}</h1>
        <h3>{desc}</h3>
        <button id='del-btn'>Del</button>
        <button id='edit-btn'>Edit</button>
    </>
  )
}

export default Card