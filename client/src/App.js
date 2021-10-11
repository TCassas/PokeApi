import React from 'react'
import Home from './pages/home/Home'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route to="/" component={Home} />
      </Switch>
    </div>
  )
}

export default App