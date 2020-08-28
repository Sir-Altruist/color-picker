import React, { Component } from 'react'

export default class Colorbox extends Component {
    render() {
        const {color} = this.props;
        return (
            <div className='color-box' 
            style={{ background: 'rgb(' + color.red + ',' +  color.green + ',' + color.blue + ')'}} >
            </div>
        )
    }
}
