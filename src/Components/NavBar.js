import React from 'react'
// import { Link } from 'react-router-dom'
// import {NavLink} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="main">
      <div>
        <p>Panera Personalities</p>
      </div>
      <div className="navlinks">
        <div className="navlink link">
          <p>Home</p>
        </div>
        <div className="navlink link">
          <p>Quiz</p>
        </div>
        {/* <div className="navlink link">
          <p>Results</p>
        </div> */}
      </div>
    </div>
  )
}

export default NavBar
