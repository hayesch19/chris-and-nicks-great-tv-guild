import React, { useEffect, useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import axios from 'axios'

const ShowPage = () => {
  const [tvShowCast, setTvShowCast] = useState([])

  const fetchTvData = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/60625/credits?api_key=03423e5f93610593731b95e4756610af&language=en-US'
    )
    setTvShowCast(resp.data.cast)
    // When the above line returns just the data and not the .cast (and we add .cast below) it doesn't work!!!
  }

  useEffect(() => {
    M.AutoInit()
    fetchTvData()
  }, [])

  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col l5">
            <img
              className="show-image"
              src="https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/1280x1280/products/5358/5846/3015-1024__28352.1452060019.jpg?c=2?imbypass=on"
              alt=""
            />
          </div>
          <div className="col l7">
            <h2 className="left-align"></h2>
            <h5>Cast</h5>
            {console.log(typeof tvShowCast)}
            {console.log(tvShowCast)}
            <ul>
              {tvShowCast.map(cast => {
                return <li>{cast.name}</li>
              })}
            </ul>
            <h5>Show Description</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              molestiae excepturi eos quibusdam illo! Totam blanditiis fugit,
              molestias quos quibusdam quia? Dicta perferendis officia expedita
              omnis inventore repudiandae nemo cupiditate.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default ShowPage
