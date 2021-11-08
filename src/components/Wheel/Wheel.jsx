import React, {useState} from 'react'
import './Wheel.scss'

const Wheel = (props) => {

  const {filteredCharacters} = props;
  const [ wheelClass, setWheelClass] = useState("circle");
  const [selectedItem, setSelectedItem] = useState(null);


  const startRotation = () => {
    setWheelClass("circle startRotate");
    setTimeout(() => {
      setWheelClass("circle startRotate stopRotate");
    },  
    Math.floor(Math.random()*10000) + 1);
  }

  const handleWheelStop = () =>{
    // document.querySelectorAll(".arrow")[0].style.backgroundColor = "white";
  }
  return (
    <div className="wheelComp">
      <div className="arrow"></div>
      <ul className={wheelClass} onWheel={handleWheelStop}>
      {filteredCharacters.map((eachChar, index) => (        
        <li key={index}>
          <div key={index} className="text" >{eachChar.name}</div>
        </li>        
      ))}
      
      {/* {characters && Array.from(document.querySelectorAll(".text")).map(item => item.style.transform = 'rotate(20deg)')} */}
      {/* style={{transform: [{ rotate: '180deg' }]}} */}
      
      </ul>
      <button className="spinButton" onClick={startRotation}>SPIN</button>
    </div>
  )
}

export default Wheel
