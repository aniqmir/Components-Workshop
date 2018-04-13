import React, {Component} from 'react';
import DigitalClock from './digitalclock';

class Clock extends Component {

    constructor(props){
        super(props);
        this.state =  {
            currentTime : new Date().toLocaleString()
        }
        this.updateTime();
    }

    updateTime() {
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleString()
            })
        
    },1000)
    }
    render() {
        return <h1><DigitalClock time = {this.state.currentTime}/></h1>//<h1>{this.state.currentTime}</h1>
        
    }
}

export default Clock;