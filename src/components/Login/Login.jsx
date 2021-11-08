import React from 'react'
import './Login.scss'
import whiteCross from '../../assets/images/white-cross.png'

const Login = (props) => {
  const { houseNames, toggleLogin, user, handleSubmit } = props;

  
  return (
    <div className="login">
      <div className="login__content">
        <img src={whiteCross} alt="Close button" className="login__content--crossButton" onClick={toggleLogin}/>
        <h4>FAN CLUB</h4>        
        <p>LOG INTO YOUR ACCOUNT</p>
        {user && <h2>{user.firstName} {user.lastName}</h2>}
        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="firstName" className="label">First Name : </label>
          <input type="text" name="firstName" className="inputText" />
          <label htmlFor="lastName" className="label">Last Name : </label>
          <input type="text" name="lastName" className="inputText" />
          <label htmlFor="house" className="label">House Name : </label>
          <select name="house" required>
            <option hidden disabled selected value >--Choose one option--</option>
          {houseNames.map((eachHouse,index) => (
            <option key={index}>{eachHouse}</option>))}
          </select>
          <button type="submit" className="login__form--save">Save</button>
        </form>
      </div>
    </div>
  )
}

export default Login
