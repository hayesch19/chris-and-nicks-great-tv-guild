import React, { Component } from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import ShowPage from './components/ShowPage.jsx'

// Test

class App extends Component {
  render() {
    return (
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/tv/:showID" component={ShowPage}></Route>
          </Switch>
        </Router>
      </main>
    )
  }
}

export default App
