import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar  bg-light">
      <div className="container-fluid">
        <Link to={''} className="navbar-brand px-4">
          Appointment
        </Link>
      </div>
    </nav>
  )
}

export default Header