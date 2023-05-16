import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
// import style from './tabbar.modelu.css'
 export default class Tabbar extends Component {
  render() {
    return (
      <div>
        <NavLink to='/film'>电影</NavLink>
        <NavLink to='/cinema'>影院</NavLink>
        <NavLink to='/center'>中心</NavLink>
        <NavLink to='/home'>个人</NavLink>
      </div>
    )
  }
}
