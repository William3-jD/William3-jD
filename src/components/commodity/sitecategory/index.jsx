import React, { Component } from 'react'
import { RightOutlined, ShoppingCartOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css'
import './index.css'

export default class Sitecategory extends Component {

  state = {
      titleName:[
          "手机",
          "电视",
          "笔记本 平板",
          "家电",
          "出行 穿戴",
          "智能 路由器",
          "电源 配件",
          "健康 儿童",
          "耳机 音箱",
          "生活 箱包"
      ],
      showList:false
  }

  handleShowList = (flag) => {
    return () => {
      this.setState({showList:flag})
    }
    

  }

  render() {
    const {titleName, showList} = this.state
    
   
    return (
      <div className='nav'>
          <div className="nav-list">
            <ul className="nav-list-title">
                
                {
                  titleName.map((item, index) => {
                    return (<li className="title" key={index} 
                            onMouseEnter={this.handleShowList(true)} 
                            onMouseLeave={this.handleShowList(false)}
                            >
                                <a href="">{item}</a>
                                <div><RightOutlined style={{"color": "#fff"}}/></div>
                            </li>
                            )
                  })
                }
              
            </ul>
          </div>
          <div className='nav-list-com' style={{display:showList? 'block' : 'none'}} >
              <ul onMouseEnter={this.handleShowList(true)} 
                  onMouseLeave={this.handleShowList(false)}>        
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  

              </ul>
              
              <ul onMouseEnter={this.handleShowList(true)} 
                  onMouseLeave={this.handleShowList(false)}>        
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  

              </ul>
              <ul onMouseEnter={this.handleShowList(true)} 
                  onMouseLeave={this.handleShowList(false)}>        
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  

              </ul>
              
              <ul onMouseEnter={this.handleShowList(true)} 
                  onMouseLeave={this.handleShowList(false)}>        
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  <li>
                    <a href=""><img className='simg' src={require('./XiaomiCivi.webp')} alt="" /></a>
                    <span>Xiaomi Civi 1S</span>
                  </li>
                  
                  

              </ul>
              
              
          </div>
    </div>
    )
  }
}
