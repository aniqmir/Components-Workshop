import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import { Button }   from 'react-bootstrap';
//import './App.css';

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;*/



class Helloworld extends Component {

  customStyling = {
    backgroundColor:'darkblue',
    textDecoration:'bold'
  }

  render () {
    return  (
    <div>
    <a href={this.props.link} style={this.customStyling}>{this.props.linktext}</a>
    <Button bsStyle='success'>Hello</Button>
    </div>
    );
  }
}

export default Helloworld;
