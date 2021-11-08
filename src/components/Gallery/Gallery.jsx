import React, {useState} from 'react'
import './Gallery.scss';
import leftArrow from '../../assets/images/left-arrow.png'
import rightArrow from '../../assets/images/right-arrow.png'

const Gallery = (props) => {
  const { filteredGalleryimages } = props;
  const [counter, SetCounter] = useState(0);

  const handleIncrement = () => {
    if(counter === filteredGalleryimages.length-1){
      SetCounter(0);
    } else{
    SetCounter(counter + 1);
  }
};
  const handleDecrement = () => {
    if(counter === 0){
      SetCounter(filteredGalleryimages.length-1);
    } else{
    SetCounter(counter - 1);
  }
};

  return (
    <div className="galleryComp">      
      <img src={leftArrow} alt="To display the image on left side" className="galleryComp__arrow galleryComp__arrow--left" onClick={handleDecrement}/>      
      <img src={filteredGalleryimages[counter]} alt="Character Picture" className="galleryComp--image"/>
      <img src={rightArrow} alt="To display the image on right side" className="galleryComp__arrow galleryComp__arrow--right" onClick={handleIncrement}/>
    </div>
  )
}

export default Gallery
