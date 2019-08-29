import React, { useEffect, useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import axios from 'axios'

const HomePage = () => {
  useEffect(() => {
    M.AutoInit()
  }, [])

  // API URL
  // https://api.themoviedb.org/3/tv/top_rated?api_key=03423e5f93610593731b95e4756610af&language=en-US&page=1

  const fetchData = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=03423e5f93610593731b95e4756610af&language=en-US&page=1'
    )
    console.log(resp.data, 'Shows')
  }

  const fetchTvData = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/60625/credits?api_key=03423e5f93610593731b95e4756610af&language=en-US'
    )
    console.log(resp.data, 'Rick and Morty')
  }

  useEffect(() => {
    fetchData()
    fetchTvData()
  }, [])

  return (
    <>
      <main className="container">
        <section className="hero-show">
          <div className="row">
            <div className="col s12 offset-s2">
              <img
                className="col s3 hero-image"
                src="https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/1280x1280/products/5358/5846/3015-1024__28352.1452060019.jpg?c=2?imbypass=on"
                alt=""
              />
              <section className="col s6">
                <h3>Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae provident veniam, deserunt velit exercitationem,
                  amet reprehenderit officiis nesciunt error a commodi! Dicta
                  quo repellendus blanditiis facere incidunt nesciunt, sint nam.
                </p>
              </section>
            </div>
          </div>
        </section>
        <section className="show-list">
          <div className="row">
            <div className="col l6">
              <img
                className="col s3"
                src="https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/1280x1280/products/5358/5846/3015-1024__28352.1452060019.jpg?c=2?imbypass=on"
                alt=""
              />
              <section className="col s6">
                <h3>Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae provident veniam, deserunt velit exercitationem,
                  amet reprehenderit officiis nesciunt error a commodi! Dicta
                  quo repellendus blanditiis facere incidunt nesciunt, sint nam.
                </p>
              </section>
            </div>
            <div className="col l6">
              <img
                className="col s3"
                src="https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/1280x1280/products/5358/5846/3015-1024__28352.1452060019.jpg?c=2?imbypass=on"
                alt=""
              />
              <section className="col s6">
                <h3>Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae provident veniam, deserunt velit exercitationem,
                  amet reprehenderit officiis nesciunt error a commodi! Dicta
                  quo repellendus blanditiis facere incidunt nesciunt, sint nam.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage
