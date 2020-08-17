
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return <div className="navbar">
    <Link to="/" className="button">
      HOME
    </Link>
    <Link to="/about" className="button">
      ABOUT
    </Link>
    <Link to="/randei" className="button">
      RACE AND IDENTITY
    </Link>
    <Link to="/migration" className="button">
      MIGRATION
    </Link>
    <Link to="/sg" className="button">
      SOUTHERN GOTHIC
    </Link>
    {/* </div> */}
  </div>

}


export default NavBar