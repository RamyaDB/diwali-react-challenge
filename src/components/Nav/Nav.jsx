import React, {useState} from 'react'
import './Nav.scss'
import wizardingworld from '../../assets/images/Wizarding-World-Logo.jpg'
import menuicon from '../../assets/images/menu-icon.png'
import profilePic from '../../assets/images/profile-picture.png'

import NavMenu from '../NavMenu/NavMenu';
import Login from '../Login/Login';

const Nav = (props) => {
  const { houseNames, handleSubmit, user, handleSignout } = props;
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [showLogin, setShowLogin ] =  useState(false);

  const toggleNav = () => {
    setShowNavMenu(!showNavMenu);
  }

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  }

  // const houseNames = characters.filter(eachChar => eachChar.house);

  // console.log(houseNames);

  const loginInfo = (
    <div className="loginDetails">
      <img src={profilePic} alt="Profile Pic" className="profilePic"/>
      {user && user.firstName}
      {user && <div class="loginDetails__dropdown-content">
        <p>{user.firstName} {user.lastName}</p>
        <button onClick={handleSignout}>Sign out</button>
      </div>}
  </div> );

  return (
    <div className="nav">
      {showNavMenu && <NavMenu toggleNav={toggleNav} />}
      {showLogin && <Login toggleLogin={toggleLogin} houseNames={houseNames} handleSubmit={handleSubmit} user={user}/>}
      <img src={menuicon} alt="Menu Icon" className="menuicon" onClick={toggleNav}/>
      <img src={wizardingworld} alt="wizarding world icon" className="wizardingIcon" />
      {user && loginInfo}
      {/* {user && <img src={profilePic} alt="Profile Pic" className="profilePic"/>}
      {user && user.firstName} */}
      {!user && <button className="loginButton" onClick={toggleLogin}>LOGIN</button>}
    </div>
  )
}

export default Nav
