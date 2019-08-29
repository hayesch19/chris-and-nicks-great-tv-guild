import React, { Component } from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import HomePage from './components/HomePage.jsx'
import ShowPage from './components/ShowPage.jsx'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route exact path="/tv/:showID" component={ShowPage}></Route>
            </Switch>
          </main>
        </Router>
      </>
    )
  }
}

export default App
