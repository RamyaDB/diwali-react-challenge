import React from 'react'
import './Character.scss'

const Character = (props) => {
  const {dateOfBirth, name, actor, house, image, wand} = props.data;
  
  return (
    <div className="eachCharacter">
      <img src={image} alt="Large Picture" className="characterPic"/>
      <section className="bioData">
        <h1>Name: {name}</h1>  
        {house && <h1>House: {house}</h1>}
        <h1>Actor: {actor}</h1> 
        {dateOfBirth && <h1>Date of Birth: {dateOfBirth}</h1>}
        {wand.length >2 && <h1>Wand: {wand.core}, {wand.wood} </h1>  }  
      </section>
    </div>
    
  )
}

export default Character
