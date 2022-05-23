import React, { Component } from 'react'
import Topbar from './components/topbar/index'
import Header from './components/header/index'
import Commodity from './components/commodity/index'
import Comt from './components/comT/index'
import Fixed from './components/fixed'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Topbar/>
        <Header/>
        <Commodity/>
        <Comt/>
        <Fixed/>
      </div>
    )
  }
}
