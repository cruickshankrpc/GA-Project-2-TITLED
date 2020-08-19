import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { ApiProvider } from './components/ApiContext'

import 'bulma'
import './styles/style.scss'

import HomePage from './components/HomePage'
import RandEI from './components/RandEI'
import MigrationArtists from './components/Migration'
import SouthernGothic from './components/SouthernGothic'
import NavBar from './components/NavBar'
import About from './components/About'

const App = () => {

  return <HashRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
      <ApiProvider>
        <Route exact path="/randei" component={RandEI} />
        <Route exact path="/migration" component={MigrationArtists} />
        <Route exact path="/sg" component={SouthernGothic} />
      </ApiProvider>
    </Switch>
  </HashRouter>
}


export default App


