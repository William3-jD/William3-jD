import React, { Component } from 'react'
import Automaps from './automaps/index'
import Sitecategory from './sitecategory'
import Mapstab from './mapstab'


import './index.css'

export default class Commodity extends Component {
    render() {
        return (
            <div className="commodity">
                <div className="container">
                    <Automaps/>
                    <Sitecategory/>
                    <Mapstab/>
                </div>
            </div>
        )
    }
}
