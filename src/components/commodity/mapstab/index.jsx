import React, { Component } from 'react'

import './index.css'

export default class Mapstab extends Component {

    state={
        handllist:[
            {img:'../imges/mapstab/b1.jpg', name:'保障服务'},
            {img:'../imges/mapstab/b2.jpg', name:'企业团购'},
            {img:'../imges/mapstab/b3.jpg', name:'F码通道'},
            {img:'../imges/mapstab/b4.jpg', name:'米粉卡'},
            {img:'../imges/mapstab/b5.jpg', name:'以旧换新'},
            {img:'../imges/mapstab/b6.jpg', name:'话费充值'},
        ],
        handlimg:[
            ,
            "../imges/mapstab/tab02.jpg",
            "../imges/mapstab/tab03.jpg"
        ]
    }


  render() {
 

    return (
      <div className='mapstab'>
          
          <div className='span4'>
              <ul className='tab_handl_list'>
                    <li>
                        <a href="">
                            <img src={require('../imges/mapstab/b1.png')} alt="" />
                            保障服务
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require('../imges/mapstab/b2.png')} alt="" />
                            企业团购
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require('../imges/mapstab/b3.png')} alt="" />
                            F码通道
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require('../imges/mapstab/b4.png')} alt="" />
                            米粉卡
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require('../imges/mapstab/b5.png')} alt="" />
                            以旧换新
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require('../imges/mapstab/b6.png')} alt="" />
                            话费充值
                        </a>
                    </li>
                </ul>
          </div>
          <div className='span16'>
              <ul className='tab_handl_img'>
                <li>
                    <a href="">
                        <img src={require("../imges/mapstab/tab01.jpg")} alt="" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={require("../imges/mapstab/tab02.jpg")} alt="" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={require("../imges/mapstab/tab03.jpg")} alt="" />
                    </a>
                </li>

              </ul>
          </div>


      </div>
    )
  }
}
