
import React, { Component } from 'react'
import BT3Carousel from './BT3Carousel'
import BT3Content from './BT3Content'
import BaiTapLayOut from "./BaiTapLayOut.css"
export default class MiddleContent extends Component {
    render() {
        return (
            <div className="container mt-4 middleContle"  >
                <BT3Carousel />
                <BT3Content />

            </div>

        )
    }
}
