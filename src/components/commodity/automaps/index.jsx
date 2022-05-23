import React, { Component } from 'react';
// import { } from 'antd'
import { RightOutlined, LeftOutlined, } from '@ant-design/icons'
import 'antd/dist/antd.css'
import $ from 'jquery'

import './index.css';



export default class Automaps extends Component {

    state = {
        imgArr: [
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b717c9c84e44409496e993ed6b526c05.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9c98d4ee217c03042cdaaef7226ffd37.jpg?w=2452&h=920",
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3a1561bd0986cd71ca726d3add6a13d.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a7a0fbd73e4f0f45ec66802d050f12b0.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
        ],
        imgIndex: 0,
        timer: null,
    }
    timer = () => {
        
    }
    //自动轮播
    autoplay = () => {
        this.clearInterval()
        const timer = setInterval(() => {
            this.setState({
                imgIndex: this.state.imgIndex + 1
            })

            if (this.state.imgIndex > this.state.imgArr.length - 1) {
                this.setState({
                    imgIndex: 0
                })
            }

            // console.log(this.state)

        }, 4500)
        this.setState({
            timer
        })
    }
    //图片右下方按钮
    changeImgTag = (index) => {
        this.clearInterval()
        this.setState({
            imgIndex: index
        })

        

        this.autoplay()
        // console.log(this.state)
    }
    //下一图
    showNextImg = () => {
        this.clearInterval()

        this.setState({ imgIndex: this.state.imgIndex + 1 })

        if (this.state.imgIndex > this.state.imgArr.length - 2) {
            this.setState({
                imgIndex: 0
            })
        }
        
        // this.show()
        // console.log(this.state)
        this.autoplay()
    }
    //上一图
    showLastImg = () => {
        this.clearInterval()

        this.setState({ imgIndex: this.state.imgIndex - 1 })

        if (this.state.imgIndex < 1) {
            this.setState({
                imgIndex: this.state.imgArr.length - 1
            })
        }
        // this.show()

        this.autoplay()

    }
    //清楚计时器
    clearInterval = () => {
        clearInterval(this.state.timer)
        if(this.state.timer !== null){
            this.setState({
                timer: null 
            })
        }
    }

    showIn = () => {
        $('.map a').eq(this.state.imgIndex).fadeIn(1000)
    }

    showOut = () => {
        $('.map a').eq(this.state.imgIndex).siblings().fadeOut(1100)
    }


    componentDidMount() {
        this.autoplay()
        // console.log(this.state.imgIndex)
        // console.log($('.map a'))
    }
    componentWillUnmount(){
        this.clearInterval()
    }

    

    render() {

        const showImg = this.state.imgArr.map((item, index) => {
            return <a key={index} href=""
            style={{ display: this.state.imgIndex == index ? this.showIn() : this.showOut() }}>
                <img
                    src={this.state.imgArr[index]} alt="" className="img">
                </img>
            </a>
        })

        const navTag = this.state.imgArr.map((item, index) => {
            return <li key={index} onClick={() => { this.changeImgTag(index) }} style={{ backgroundColor: this.state.imgIndex == index ? 'white' : '' }} className="tag"></li>
        })

        return (
            <div className='automaps'>
                <button id="map-last" onClick={this.showLastImg}><LeftOutlined style={{ fontSize: 30, color: '#fff' }} /></button>
                <button id="map-next" onClick={this.showNextImg}><RightOutlined style={{ fontSize: 30, color: '#fff' }} /></button>
                <div id="maps">
                    <div className="map" onMouseEnter={this.clearInterval} onMouseLeave={this.autoplay}>
                        {/* <a href="" className="map" style={{display: 'block'}}>
                            <img src={[require("../imges/maps/01.jpg")]} alt="" className="img"></img>
                        </a>
                        <a href="" className="map"><img src={[require("../imges/maps/02.webp")]} alt="" className="img"></img></a>
                        <a href="" className="map"><img src={[require("../imges/maps/03.webp")]} alt="" className="img"></img></a>
                        <a href="" className="map"><img src={[require("../imges/maps/04.webp")]} alt="" className="img"></img></a> */}
                        {showImg}

                    </div>
                </div>
                <ul className="navTag">
                    {/* <a href="" className="nav_a indexTag"></a>
                    <a href="" className="nav_a"></a>
                    <a href="" className="nav_a"></a>
                    <a href="" className="nav_a"></a> */}
                    {navTag}
                </ul>

            </div>
        )
    }
}
