import React, { Component } from 'react'

export default class Xiaomi extends Component {
  render() {
    return (
        <div className='children-list' >
                            
            <li className='children'>
                <a href="">
                    <div className='children-01'>
                        <img src={require("../../imges/XiaomiCivi1S.webp")} alt="Xiaomi Civi 1S" />
                    </div>
                    <div className='children-02'>
                        Xiaomi Civi 1S
                    </div>
                    <p className='children-03'>
                        2299元起
                    </p>
                </a>
            </li>
            
            
        </div>
    )
  }
}
