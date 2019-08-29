import React, { useEffect, useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

const ShowPage = () => {
  useEffect(() => {
    M.AutoInit()
  }, [])

  return <div>This Is A Show Page</div>
}

export default ShowPage
