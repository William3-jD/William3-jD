import React, { Component } from 'react'
import { RightOutlined, ShoppingCartOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css'
import './index.css'

export default class Topbar extends Component {
  render() {
    return (
      <div className="topbar">
        <div className="container">
            <div className="menu-nav">
                <a href="">小米商城</a><span>|</span>
                <a href="">MIUI</a><span>|</span>
                <a href="">IoT</a><span>|</span>
                <a href="">云服务</a><span>|</span>
                <a href="">天星数科</a><span>|</span>
                <a href="">有品</a><span>|</span>
                <a href="">小爱开放平台</a><span>|</span>
                <a href="">企业团购</a><span>|</span>
                <a href="">资质证照</a><span>|</span>
                <a href="">协议规则</a><span>|</span>
                <a href="">下载app</a><span>|</span>
                <a href="">Select Location</a>
            </div>

            <div className="menu-car">
                
                <a><ShoppingCartOutlined />购物车<span>（0）</span></a>
            </div>

            <div className="info">
                <a href="">登录</a><span>|</span>
                <a href="">注册</a><span>|</span>
                <a href="" className="sep">消息通知</a>
            </div>

        </div>
    </div>
    )
  }
}
