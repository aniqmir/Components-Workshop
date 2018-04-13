import React, { Component } from 'react';
import Counter from './Counter';

class Myevents extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        this.incrementCounter = this.incrementCounter.bind(this)
        this.decrementCounter = this.decrementCounter.bind(this)
       //this.incrementCounter =  this.incrementCounter.bind(this)
    }
    
    incrementCounter() {
        this.setState ({

            counter: this.state.counter+1
        })

    }

    decrementCounter() {
        if(this.state.counter === 0) {

        }
        else
        this.setState({
            counter:this.state.counter-1
        })

    }
    /*incrementCounter() {
        this.setState ({
            counter: this.state.counter + 1
    })
    <button onClick={this.incrementCounter.bind(this)}>+</button>
     <div>
               <h1>Hello Events </h1>
               <button onClick={this.incrementCounter}>+</button>
               <br/>
               <span>{this.state.counter}</span>

                </div>*/
    
    render() {
        return (
            <div>
                <Counter counter={this.state.counter} increment={this.incrementCounter} decrement={this.decrementCounter}/>
                </div>
           )
    }
}

export default Myevents;