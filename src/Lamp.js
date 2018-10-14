import React, { Component } from 'react';

export default class Lamp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: props.on
        }
    }

    handleClick = () => {
        this.setState({ on: !this.state.on });
    }

    render() {
        const light = this.state.on ? 'on' : 'off';
        
        return(
            <div className="Lamp">
                <button className={light} onClick={this.handleClick} >
                    {light.toUpperCase()}
                </button>
                <figure className={light} />
            </div>
        )
    }
}