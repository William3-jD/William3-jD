// import Search from 'antd/lib/transfer/search'
import React, { Component } from 'react'

import Search from'./search'

import Xiaomi from '../../pages/head-children-list/Xiaomi'
import Redmi from '../../pages/head-children-list/Redmi'
import Tv from '../../pages/head-children-list/Tv'
import Notebook from '../../pages/head-children-list/Notebook'
import Tablet from '../../pages/head-children-list/Tablet'
import Electric from '../../pages/head-children-list/Electric'
import Rou from '../../pages/head-children-list/Rou'

import './index.css'


export default class Header extends Component {

    state = {
        showList:false,
        cutHeadList:false,
        cutHeadListIndex:0,
        headArr:[
            {id:'01', name:"Xiaomi手机",  com:<Xiaomi/>},
            {id:'02', name:"Redmi 红米",  com:<Redmi/>},
            {id:'03', name:"电视",        com:<Tv/>},
            {id:'04', name:"笔记本",      com:<Notebook/>},
            {id:'05', name:"平板",        com:<Tablet/>},
            {id:'06', name:"家电",        com:<Electric/>},
            {id:'07', name:"路由器",      com:<Rou/>},
        ],  
        
    }
    handleShowList = (flag) => {
        return () => {
          this.setState({showList:flag})
        }
    }
    cutHeadList = (a) => {
        
        return () => {
            this.setState({cutHeadListIndex:a})
        }
        
        
    }
    



    render() {
        const {showList, headArr, cutHeadListIndex} = this.state

        return (
            <div className="header">
                <div className="container">
                    
                    <div className="header-logo">
                        <a href="" className="logo">小米商城</a>
                    </div>

                    <div className="head">
                        <ul className="head-a" onMouseEnter={this.handleShowList(true)} onMouseLeave={this.handleShowList(false)}>
                            {
                                headArr.map((item, index) => {
                                    return(
                                        <li key={index} >
                                            <a 
                                            onMouseEnter={this.cutHeadList(index)} 
                                            onMouseLeave={this.cutHeadList(index)}
                                            href=''
                                            
                                            className="head-flow-commodity">{item.name}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                            
                            {/* <li>
                                
                                <Link to="/pages/head-children-list/Redmi" className="head-flow-commodity">Redmi 红米</Link>
                            </li>
                            
                            <li><a href="" className="head-flow-commodity">电视</a></li>
                            <li><a href="" className="head-flow-commodity">笔记本</a></li>
                            <li><a href="" className="head-flow-commodity">平板</a></li>
                            <li><a href="" className="head-flow-commodity">家电</a></li>
                            <li><a href="" className="head-flow-commodity">路由器</a></li> */}
                        </ul>
                        <ul>
                            <li><a href="" className="head-flow-commodity headf">服务</a></li>
                            <li><a href="" className="head-flow-commodity headf">社区</a></li>
                        </ul>
                    </div>
                
                    <Search/>

               </div>
               <div className="head-list" style={{display:showList? 'block' : 'none'}} onMouseEnter={this.handleShowList(true)} onMouseLeave={this.handleShowList(false)}>
                    <ul className='container'>
                        {/* <Routes>
                            <Route path="/pages/head-children-list/Xiaomi" element ={<Xiaomi/>}/>
                            <Route path="/pages/head-children-list/Redmi" element ={<Redmi/>}/>
                            <Route path="/pages/head-children-list/Tv" element ={<Tv/>}/>
                            <Route path="/pages/head-children-list/Notebook" element ={<Notebook/>}/>
                            <Route path="/pages/head-children-list/Tablet" element ={<Tablet/>}/>
                            <Route path="/pages/head-children-list/Electric" element ={<Electric/>}/>
                            <Route path="/pages/head-children-list/Rou" element ={<Rou/>}/>
                        </Routes> */}
                        {
                            headArr.map((item, index) => {
                                return(
                                    <div key={index} 
                                    style={{display:cutHeadListIndex == index? 'block' : 'none'}}
                                    >{item.com}</div>
                                )
                            })
                        }
                        
                    </ul>
                </div>
            </div>
        )
    }
}
