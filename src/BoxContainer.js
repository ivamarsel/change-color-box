import React, { Component } from 'react'
import Box from './Box';
import './BoxContainer.css';
import { rgbColorPicker } from './Helper';

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 18,
        allColors: rgbColorPicker(18)

    }
    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(
            () => <Box colors={this.props.allColors} />)
        // make an array with the length of numBoxes,
        //go over it and on each place of these 18 
        //place a Box component
        //this.props.allColors=each box will have access to the 18 random colors
        return (
            <div className='BoxContainer'>
                {boxes}
            </div>
        )
    }
}

export default BoxContainer;


// We are reversing the Downward Data flow here. The child is stateFull while the parent is stateLess
//The parent is pretty simple and will only loop a certain bunch of times and make a few boxes.