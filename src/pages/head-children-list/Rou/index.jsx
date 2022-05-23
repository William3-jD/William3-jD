import React, { Component } from 'react'

export default class Route extends Component {
  render() {
    return (
      <div className='children-list' >
                            
            <li className='children'>
                <a href="">
                    <div className='children-01'>
                        <img src={require("../../imges/RedmiRouteAX5400.webp")} alt="RedmiRoute AX5400" />
                    </div>
                    <div className='children-02'>
                    Redmi电竞路由器 AX5400
                    </div>
                    <p className='children-03'>
                        599元起
                    </p>
                </a>
            </li>
        </div>
    )
  }
}
