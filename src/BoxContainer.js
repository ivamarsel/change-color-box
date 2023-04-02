import React, { Component } from 'react'
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 18,
        allColors: ['purple', 'magenta', 'violet', 'pink']
    }
    render() {
        const boxes = Array.from({ length: this.props.Numboxes }).map(
            () => <Box colors={this.props.allColors} />)
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