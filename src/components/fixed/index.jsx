import React, { Component } from 'react'
import $ from 'jquery'
import './index.css'

export default class Fixed extends Component {
    state = {
        showonscroll: false,
    }
    onTotop = () => {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
    // showTotop = () => {
        
        
    // }
    HandleScroll = () =>{
        const scrollTop = window.scrollY;
        if(scrollTop > 820){
            this.setState({
                showonscroll:true
            })
        }else{
            this.setState({
                showonscroll:false
            })
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.HandleScroll)
        
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.HandleScroll)
    }


  render() {
    
    return (
      <div className='fixed'>
          <a className='sd'>
              <div className='icon'>
                  <img className='static' src={require('./imges/APP.png')} alt="" />
                  <img className='hover' src={require('./imges/APP_hover.png')} alt="" />
              </div>
              
              <span>手机APP</span>
          </a>
          <a className='sd'>
              <div className='icon'>
                  <img className='static' src={require('./imges/bee.png')} alt="" />
                  <img className='hover' src={require('./imges/bee_hover.png')} alt="" />
              </div>
              
              <span>个人中心</span>
          </a>
          <a className='sd'>
              <div className='icon'>
                  <img className='static' src={require('./imges/12eb.png')} alt="" />
                  <img className='hover' src={require('./imges/12eb_hover.png')} alt="" />
              </div>
              
              <span>售后服务</span>
          </a>
          <a className='sd'>
              <div className='icon'>
                  <img className='static' src={require('./imges/4f03.png')} alt="" />
                  <img className='hover' src={require('./imges/4f03_hover.png')} alt="" />
              </div>
              
              <span>人工客服</span>
          </a>
          <a className='sd'>
              <div className='icon'>
                  <img className='static' src={require('./imges/d7db.png')} alt="" />
                  <img className='hover' src={require('./imges/d7db_hover.png')} alt="" />
              </div>
              
              <span>购物车</span>
          </a>
          

          
            
            <a className='data_hidden' style={{display:this.state.showonscroll? 'block' : 'none'}} onClick={this.onTotop}>
                    <div className='icon'>
                        <img className='static' src={require('./imges/totop.png')} alt="" />
                        <img className='hover' src={require('./imges/totop_hover.png')} alt="" />
                    </div>
                    <span>回顶部</span>
            </a>
            
            
      </div>
    )
  }
}

