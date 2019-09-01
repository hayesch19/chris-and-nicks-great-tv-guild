import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import axios from 'axios'

const HomePage = () => {
  const [tvShows, setTvShows] = useState([])
  const [randomShows, setRandomShows] = useState([0])

  const fetchData = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=03423e5f93610593731b95e4756610af&language=en-US&page=1'
    )
    setTvShows(resp.data.results)
    setRandomShows(
      resp.data.results[Math.floor(Math.random) * resp.data.results.length - 1]
    )
    console.log(resp.data, 'Shows')
    console.log(resp.data, 'Random')
  }

  useEffect(() => {
    fetchData()
    M.AutoInit()
  }, [])

  return (
    <>
      <main className="container">
        <section className="hero-show">
          <div className="row">
            {randomShows.map((randomShow, i) => {
              return (
                <div key={i} className="col s12 offset-s2">
                  <img
                    className="col s3 hero-image"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${randomShow.poster_path}`}
                    alt=""
                  />
                  <section className="col s6">
                    <h3>{randomShow.name}</h3>
                    <p>Rating: {randomShow.vote_average}</p>
                    <p>First Aired: {randomShow.first_air_date}</p>
                    <p> {randomShow.overview}</p>
                  </section>
                </div>
              )
            })}
          </div>
        </section>
        <section className="show-list">
          <div className="row">
            {tvShows.map((tvShow, i) => {
              return (
                <div key={i} className="col l6 show-card-area">
                  <div className="show-poster-area">
                    <Link
                      to={{
                        pathname: `/tv/${tvShow.id}`,
                        tvShow
                      }}
                    >
                      <img
                        className="col s3"
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${tvShow.poster_path}`}
                        alt=""
                      />
                    </Link>
                  </div>
                  <section className="col s6">
                    <h5>{tvShow.name}</h5>
                    <p>Rating: {tvShow.vote_average}</p>
                    <p>First Aired: {tvShow.first_air_date}</p>
                    <p>{tvShow.overview}</p>
                  </section>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage
