import React, { useEffect, useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import axios from 'axios'

const ShowPage = props => {
  const [tvShowCast, setTvShowCast] = useState([])
  // const [showID, setShowID] = useState('')

  const fetchTvData = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${props.match.params.showID}/credits?api_key=03423e5f93610593731b95e4756610af&language=en-US`
    )
    setTvShowCast(resp.data.cast)
    // TALK TO MARK - When the above line returns just the data and not the .cast (and we add .cast below) it doesn't work!!!
  }

  useEffect(() => {
    M.AutoInit()
    fetchTvData()
    console.log(props)
    // TALK TO MARK - when I try to set this to state, it returns empty...why?
    // console.log(props.match.params.showID)
    // setShowID(props.match.params.showID)
    // console.log(showID)
    // console.log(
    //   `https://api.themoviedb.org/3/tv/${showID}/credits?api_key=03423e5f93610593731b95e4756610af&language=en-US`
    // )
  }, [])

  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col l5">
            <img
              className="show-image"
              src="https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/1280x1280/products/5358/5846/3015-1024__28352.1452060019.jpg"
              alt=""
            />
          </div>
          <div className="col l7">
            <h2 className="left-align">Show Title</h2>
            <h5>Cast</h5>
            {/* {console.log(typeof tvShowCast)}
            {console.log(tvShowCast)} */}
            <ul>
              {tvShowCast.map((cast, i) => {
                return <li key={i}>{cast.name}</li>
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
