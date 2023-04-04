import React, { Component } from 'react';
import './Box.css';
import { choice } from './Helper';

class Box extends Component {

    constructor(props) {
        super(props);
        this.state = { color: choice(this.props.colors) }//choice from the array of all 18 colors allColors
        this.handleClick = this.handleClick.bind(this);
    }

    pickColor() {
        let newColor;
        do {
            newColor = choice(this.props.colors);
        } while (newColor === this.state.color)
        this.setState({ color: newColor });
    } //keep repeating the color function until you get a different color(in order not to have two same colors one after another)

    handleClick() {
        this.pickColor()

    }

    render() {
        return (
            <div className='Box' style={{ backgroundColor: this.state.color }}
                onClick={this.handleClick}>
                <h1>I'm a color box!</h1>
            </div >
        )
    }
}

export default Box;