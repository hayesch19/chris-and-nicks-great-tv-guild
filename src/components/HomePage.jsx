import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import axios from 'axios'

const HomePage = () => {
  const [tvShows, setTvShows] = useState([[]])
  const [rand, setRand] = useState(0)

  const fetchData = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=03423e5f93610593731b95e4756610af&language=en-US&page=1'
    )
    setTvShows(resp.data.results)
    setRand(Math.floor(Math.random() * resp.data.results.length))
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
            <div className="col s12 offset-s1">
              <img
                className="col s3 responsive-img"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${tvShows[rand].poster_path}`}
                alt=""
              />
              <section className="col s6">
                <h3>{tvShows[rand].name}</h3>
                <p>Rating: {tvShows[rand].vote_average}</p>
                <p>First Aired: {tvShows[rand].first_air_date}</p>
                <p> {tvShows[rand].overview}</p>
              </section>
            </div>
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
                        className="col s4 responsive-img"
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${tvShow.poster_path}`}
                        alt=""
                      />
                    </Link>
                  </div>
                  <section className="col s6">
                    <h5>{tvShow.name}</h5>
                    <p>Rating: {tvShow.vote_average}</p>
                    <p>First Aired: {tvShow.first_air_date}</p>
                    {/* <p>{tvShow.overview}</p> */}
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
