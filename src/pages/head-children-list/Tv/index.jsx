import React, { Component } from 'react'

export default class Tv extends Component {
  render() {
    return (
      <div className='children-list' >
                            
            <li className='children'>
                <a href="">
                    <div className='children-01'>
                        <img src={require("../../imges/RedmiTVX552022.webp")} alt="Redmi TV X55 2022" />
                    </div>
                    <div className='children-02'>
                      Redmi 智能电视 X55 2022
                    </div>
                    <p className='children-03'>
                        2499元起
                    </p>
                </a>
            </li>
        </div>
    )
  }
}
