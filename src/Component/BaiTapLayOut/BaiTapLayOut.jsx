import React, { Component } from 'react'
import BT3Content from './MiddleContent'
import BT3Header from './BT3Header'
import MiddleContent from './MiddleContent'
import BT3Footer from './BT3Footer'

export default class BaiTapLayOut extends Component {
    render() {
        return (
            <div>
                <BT3Header/>
                <MiddleContent/>
                <BT3Footer/>
            </div>
        )
    }
}
