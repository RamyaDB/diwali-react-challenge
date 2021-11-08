import React from 'react'
import './NavMenu.scss'
import blackCross from '../../assets/images/black-cross.png'

const NavMenu = (props) => {
  const {toggleNav} = props;
  return (
    <div className="navMenu">
      <div className="navMenu__content">
        <img src={blackCross} alt="To close the Nav Menu" className="navMenu__content--crossButton" onClick={toggleNav}/>
        <ul className="navMenu__content__menuList">
          <li>Home</li>
          <li>Gallery</li>
          <li>Search</li>
        </ul>
      </div>
    </div>

  )
}

export default NavMenu
