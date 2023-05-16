import React, { Component } from 'react'
// import DemoTS from './router/temp'
import Router from './05-redux/router'
import store from './05-redux/store'
// import Tabbar from './component/Tabbar'
export default class App extends Component {
  state = {
    flag: store.getState().flag,
  }
  componentDidMount() {
    store.subscribe(() => {
      console.log('我被订阅了', store.getState())
      this.setState({
        flag: store.getState().flag,
      })
    })
  }
  render() {
    console.log(store.getState())
    const { flag } = this.state
    return (
      <div>
        <Router></Router>
        
        {flag && (
          <div>
            <ul>
              <li>电影</li>
              <li>影院</li>
              <li>用户中心</li>
            </ul>
          </div>
        )}
      </div>
    )
  }
}
