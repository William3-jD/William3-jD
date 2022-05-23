import React, { Component } from 'react'

export default class Notebook extends Component {
  render() {
    return (
      <div className='children-list' >
                            
            <li className='children'>
                <a href="">
                    <div className='children-01'>
                        <img src={require("../../imges/RedmiBookPro142022.webp")} alt="RedmiBook Pro14 2022" />
                    </div>
                    <div className='children-02'>
                    RedmiBook Pro14 2022
                    </div>
                    <p className='children-03'>
                        5399元起
                    </p>
                </a>
            </li>
        </div>
    )
  }
}
