import React, { useEffect, useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

const HomePage = () => {
  useEffect(() => {
    M.AutoInit()
  }, [])

  return (
    <>
      <div>This Is A Home Page</div>
    </>
  )
}

export default HomePage
