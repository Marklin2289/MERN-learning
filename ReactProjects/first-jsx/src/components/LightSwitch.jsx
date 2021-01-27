import React, {Component} from 'react';

class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
        };
    }
    // flipSwitch = () => {
    //     if( this.state.position === "On" ) {
    //         this.setState({ position: "Off" });
    //     } else {
    //         this.setState({ position: "On" });
    //     }
    // }
    flipSwitch = () => { this.state.position === "On" ? 
                    this.setState({position: "Off"}) : this.setState({position: "On"})}

    render() {
        return (
            <fieldset 
                style = { {background: this.state.position === "On" ? "white" : "black"}}
            >
                <p
                    style = {{color: this.state.position === "On" ? "black" : "red"}}
                >The light is currently <span>{ this.state.position }</span> </p>
                <button onClick={ this.flipSwitch }>Flip Switch</button>

            </fieldset>
        );
    }
}

export default LightSwitch;