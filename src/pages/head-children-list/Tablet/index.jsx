import React, { Component } from 'react'

export default class Tablet extends Component {
  render() {
    return (
      <div className='children-list' >
                            
            <li className='children'>
                <a href="">
                    <div className='children-01'>
                        <img src={require("../../imges/Mitablet.webp")} alt="Mi tablet" />
                    </div>
                    <div className='children-02'>
                    小米平板5
                    </div>
                    <p className='children-03'>
                        1899元起
                    </p>
                </a>
            </li>
        </div>
    
    )
  }
}
