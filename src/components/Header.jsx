import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

const Header = () => {
  useEffect(() => {
    M.AutoInit()
  }, [])

  return (
    <>
      <nav className="nav-wrapper">
        <Link to="/" className="brand-logo center">
          Chris + Nick's Great TV Guide
        </Link>
      </nav>
    </>
  )
}

export default Header
