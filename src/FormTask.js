import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Bootstrap} from 'react-bootstrap';


class Form extends Component {

    constructor(props){
        super(props)
        this.state = 
        {
            username : '',
            allUsers:[]
        }
        

        this.formHandler = this.formHandler.bind(this)
        this.buttonHandler = this.buttonHandler.bind(this)
    }

    formHandler(ev) {
        this.setState({
            username: ev.target.value
        })
    }

    buttonHandler(){
        let currentUser = this.state.allUsers;
        currentUser.push(this.state.username);
        this.setState({
            allUsers:currentUser,
            username:''
        })
    }
    render() {
        return (
            <div className='container'>
                <h1 class='textcentre'>Form</h1>
                <input className='form-control' type='text' name='username' placeholder='Enter Anything' value={this.state.username} onChange={this.formHandler}/>
                <Button bsStyle='success' onClick={this.buttonHandler}>Save</Button>   
                <p>{this.state.username}</p>      
             </div>
        )
    }
}


export default Form