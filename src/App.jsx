import React, { useState, useEffect } from 'react'
import './App.scss'

import Nav from './components/Nav/Nav'
import Main from './containers/Main/Main'

const App = () => {
  const [ characters, setCharacters] = useState(null);  
  const [ user, setUser]  = useState(null);

  

  useEffect( () => {
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then(res => res.json())
      .then(jsonData => setCharacters(jsonData))
  }, [])

  // console.log( changeCharacter)

  const filteredHouseArr = characters && characters.map(eachChar => eachChar.house);

  const houseNames = [...new Set(filteredHouseArr)].slice(0,4).sort();

  // console.log(houseNames);

  const filteredCharacters = characters && characters.filter(eachChar => eachChar.image).slice(0,24);

  // const filteredGalleryimages = characters && characters.filter(eachChar => eachChar.image).map(eachChar => eachChar.image);

  const handleSubmit =(event) => {
    event.preventDefault();
    let firstName = event.target.elements[0].value;
    let lastName = event.target.elements[1].value;

    if( firstName && lastName) {
      event.target.reset();
      setUser({firstName, lastName });    
    }
  }

  const handleSignout = () => {    
    setUser(null);    
  }

  return (
    <div className="app">
      <Nav houseNames={houseNames} handleSubmit={handleSubmit} user={user} handleSignout={handleSignout}/>     
      
      <Main characters={characters} filteredCharacters={filteredCharacters}/>
    </div>
  )
}

export default App
