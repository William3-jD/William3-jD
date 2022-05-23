import React, { Component } from 'react'

export default class Redmi extends Component {
  render() {
    return (
        <div className='children-list' >
                            
            <li className='children'>
                <a href="">
                    <div className='children-01'>
                        <img src={require("../../imges/Redmi10A.webp")} alt="Redmi 10A" />
                    </div>
                    <div className='children-02'>
                        Redmi 10A
                    </div>
                    <p className='children-03'>
                        649元起
                    </p>
                </a>
            </li>
            
            
        </div>
    )
  }
}
