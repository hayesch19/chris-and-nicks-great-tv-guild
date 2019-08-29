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
          <div className="col l6 offset-l3">
            <img
              className="show-image col l6"
              src="https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/1280x1280/products/5358/5846/3015-1024__28352.1452060019.jpg?c=2?imbypass=on"
              alt=""
            />
            <h2 className="center">Show Title</h2>
            <section className="row">
              <ul className="col l6">
                <li>Chris Hayes</li>
                <li>Nick Weber</li>
              </ul>
              <p className="col l6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                molestiae excepturi eos quibusdam illo! Totam blanditiis fugit,
                molestias quos quibusdam quia? Dicta perferendis officia
                expedita omnis inventore repudiandae nemo cupiditate.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

export default ShowPage
