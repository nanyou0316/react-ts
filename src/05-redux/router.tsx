import React from 'react'
import {HashRouter as Router,Route, Switch,Redirect} from 'react-router-dom'
import Home from '../views/Home'
import Film from '../views/Film'
import Cinema from '../views/Cinema'
import Center from '../views/Center'
import Detail from '../views/Detail'
export default function Demo() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/home' component={Home} exact></Route>
          <Route path='/film' component={Film} exact></Route>
          <Route path='/detail/:id' component={Detail} exact></Route>
          <Route path='/cinema' component={Cinema} exact></Route>
          <Route path='/center' component={Center} exact></Route>
          <Redirect path='/' to='/film' exact></Redirect>
        </Switch>
        
      </Router>
    </div>
  )
}
