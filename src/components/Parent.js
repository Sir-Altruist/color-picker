import React, { Component } from 'react';
import Range from './Range';
import Colorbox from './Colorbox';


export default class Parent extends Component {
    state = {
        colors: {
            red: 0,
            green: 0,
            blue: 0
        }
    }
    
    changeColor = e => {
        let r;
        let g;
        let b;

        switch(e.target.id) {
            case 'red':
                r = e.target.value;
                g = this.state.colors.green;
                b = this.state.colors.blue;
                this.setState({
                    colors: {
                        red: r,
                        green: g,
                        blue: b
                    }
                })
                break;
            case 'green':
                r = this.state.colors.red;
                g = e.target.value;
                b = this.state.colors.blue;
                this.setState({
                    colors: {
                        red: r,
                        green: g,
                        blue: b
                    }
                })
                break;
            case 'blue':
                r = this.state.colors.red;
                g = this.state.colors.green;
                b = e.target.value;
                this.setState({
                    colors: {
                        red: r,
                        green: g,
                        blue: b
                    }
                })
                break;
            default:
                this.setState({
                    colors: {
                        red: this.state.colors.red,
                        green: this.state.colors.green,
                        blue: this.state.colors.blue,
                    }
                })
                break;
        }
    }
    render() {
        return (
            <div className='parent'>
                <h1>Colour Pallete</h1>
                <marquee>...customize your colour</marquee>
                <Range  color={this.state.colors} changeColor={this.changeColor}/>
                <Colorbox color={this.state.colors} />
            </div>
        )
    }
}
