import React from 'react'
import './card.css'

function Card() {
  return (
    <div id = "adi">
    
        <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ26cJJ7a-ZhndAlJcVg5nuGk0qBfYgZfklYQ&s" alt="" height={100} width={100}></img>      <h1>Sauryam</h1>
        <h3>Web Developer</h3>
        <h1>{props.name}</h1>
        <h3>{props.edu}</h3>
      
    </div>
  )
}

export default Card
