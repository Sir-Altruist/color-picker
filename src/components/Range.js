import React, { Component } from 'react'

export default class Range extends Component {
    render() {
        const {color, changeColor} = this.props;
        return (
            <div className='range'>
                <h3>R:</h3>
               <input type='range' id='red' max='255' min='0' value={color.red} onChange={changeColor} />
               <h3>G:</h3>
               <input type='range' id='green' max='255' min='0' value={color.green} onChange={changeColor}/>
               <h3>B:</h3> 
               <input type='range' id='blue' max='255' min='0' value={color.blue} onChange={changeColor}/> 
            </div>
        )
    }
}
