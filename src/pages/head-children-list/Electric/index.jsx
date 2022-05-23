import React, { Component } from 'react'

export default class Electric extends Component {
  render() {
    return (
      <div className='children-list' >
                            
            <li className='children'>
                <a href="">
                    <div className='children-01'>
                        <img src={require("../../imges/Miairc.webp")} alt="Mi air c" />
                    </div>
                    <div className='children-02'>
                    巨省电 | 米家空调 新一级 1.5匹 睡眠版
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
