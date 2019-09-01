import React, { useEffect, useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import axios from 'axios'

const ShowPage = props => {
  const [tvShowCast, setTvShowCast] = useState({ cast: [] })
  const [showID, setShowID] = useState(props.match.params.showID)
  const [showData, setShowData] = useState(props.location.tvShow)

  const fetchTvData = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${showID}/credits?api_key=03423e5f93610593731b95e4756610af&language=en-US`
    )
    console.log({ data: resp.data })
    setTvShowCast(resp.data)
  }

  console.log(props.location.tvShow)

  useEffect(() => {
    M.AutoInit()
    fetchTvData()
    // console.log({ props })
  }, [])

  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col l5">
            <img
              className="show-image"
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${showData.poster_path}`}
              alt=""
            />
          </div>
          <div className="col l7">
            <h2 className="left-align">{showData.name}</h2>
            <h5>Cast</h5>
            {/* {console.log(typeof tvShowCast)}
            {console.log(tvShowCast)} */}
            <ul>
              {tvShowCast.cast.map((cast, i) => {
                return <li key={i}>{cast.name}</li>
              })}
            </ul>
            <h5>Description</h5>
            <p>{showData.overview}</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default ShowPage
