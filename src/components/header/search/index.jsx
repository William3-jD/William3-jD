import React, { Component } from 'react'
import {SearchOutlined} from '@ant-design/icons'
import $ from 'jquery'
import 'antd/dist/antd.css'
import './index.css'

export default class Search extends Component {

  state = {
    focus:false
  } 


	
  changefocus = (flag) => {
    return () => {
      $('.search-form').children().css({'border':'1px solid #ff6700'})
      this.setState({focus:flag}) 
    }
    
  }
  changeblur = (flag) => {
    return () => {
      $('.search-form').children().css({'border':''})
      this.setState({focus:flag}) 
    }
  }


  
  


  render() {
    const {focus} = this.state
    // const borderColor = {
    //   border:this.state.mouse ? '1px solid #9c9c9c' : '1px solid #e0e0e0'
    // }

    return (
        <div className="search">
            <form action="" className="search-form">
              
                <input type="search"
                 name="keyword"
                  className="search-text"
                  
                  onBlur={this.changeblur(false)}
                  onFocus={this.changefocus(true)}
                  />
                <input type="submit" value="" className="search-btn" />
                
                <div className='search-list' style={{display:focus? 'block' : ''}}></div>
            </form>
            
        </div>
    )
  }
}
