import React, { useEffect, useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

const ShowPage = () => {
  useEffect(() => {
    M.AutoInit()
  }, [])

  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col l4 offset-l4">
            <img
              className="show-image"
              src="https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/1280x1280/products/5358/5846/3015-1024__28352.1452060019.jpg?c=2?imbypass=on"
              alt=""
            />
            <h2 className="center">Show Title</h2>
          </div>
        </div>
      </main>
    </>
  )
}

export default ShowPage
