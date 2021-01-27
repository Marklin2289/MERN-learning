import React from 'react';
import styles from './Toggle.module.css'
console.log(styles)

class Toggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            on: false,
            count: 0
        }
    }
    
    handleClick = () => this.setState({
        on: !this.state.on,
        count: this.state.count + 1
    })
    
    // lifecycle method
    componentDidMount(){
        // we could get some data here if needed, like API call
        console.log('component mounted!')
    }

    render() {
        const {handleClick, state, count} = this;

        return(
            <div onClick={handleClick} 
                className={styles.circle + (state.on ? ' ' + styles.isActive : ' ')}
                >
                {state.on ? "Clicked!" : "Click me!"}{state.count}
            </div>
        )
    }
}

export default Toggle;