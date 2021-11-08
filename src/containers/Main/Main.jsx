import React, { useState } from 'react'
import './Main.scss'
import Character from "../../components/Character/Character"
import Gallery from '../../components/Gallery/Gallery'
import Wheel from '../../components/Wheel/Wheel'

const Main = (props) => {
  const {characters, filteredCharacters} = props;

  const [changeCharacter, setChangeCharacter] = useState(0);

  const filteredGalleryimages = characters && filteredCharacters.map(eachChar => eachChar.image);

  const handleChangeCharacter = () => {
    if (changeCharacter === filteredCharacters.length-1) {
      setChangeCharacter(0);
    }else {
    setChangeCharacter(changeCharacter + 1);
  }
}

  return (
    <div className="main">
        <section className="gallery">
          <h2 className="gallery__heading">Gallery</h2>
          {characters && <Gallery filteredGalleryimages={filteredGalleryimages} />}
        </section>
        <section className="wheel">
          <h2 className="wheel__heading">Find your favourite character</h2>
          {characters && <Wheel filteredCharacters={filteredCharacters}  />}
        </section>
        <section className="characterInfo">
          <h2 className="characterInfo__heading">Find about each character</h2>
          <button onClick={handleChangeCharacter}>Change character</button>     
          {characters && <Character data={filteredCharacters[changeCharacter]}/>}
        </section>
        
      </div>
  )
}

export default Main
