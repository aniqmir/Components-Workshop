import React, { Component,Fragment } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
//import { Button }   from 'react-bootstrap';
import Form from './Components/TestForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import injectTapEventPlugin from 'react-tap-event-plugin';
//import './App.css';
import  Drawer from './Components/Drawer'
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
   /*<div>
    <a href={this.props.link} style={this.customStyling}>{this.props.linktext}</a>
    <Button bsStyle='success'>Hello</Button>
    </div>*/
        {/*<MuiThemeProvider>
            <div className="App">
              <Form onChange={fields => this.onChange(fields)} />
              <p>
                {JSON.stringify(this.state.fields, null, 2)}
              </p>
            </div>
          </MuiThemeProvider>*/}
    //injectTapEventPlugin();
    class App extends Component {
      state = {
        fields: {}
      };
    
      onChange = updatedValue => {
        this.setState({
          fields: {
            ...this.state.fields,
            ...updatedValue
          }
        });
      };
   
      render() {
        return (
          <Drawer/>
        );
      }
    }
export default App;
