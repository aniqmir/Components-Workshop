import React, { Component } from 'react';

class Forms extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            allUsers: [],
            radioGroup: {
                meanStack:false,
                mernStack:false,
                lampStack:true

            },
            checkGroup: {
                mongoDb:false,
                reacto:false,
                nodeo:true

            },
            selectedValue: 'Option1'
        }
        this.formHandler = this.formHandler.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
        this.radioHandler = this.radioHandler.bind(this)
        this.checkHandler = this.checkHandler.bind(this)
        this.dropdownHandler = this.dropdownHandler.bind(this)
        
    }



    formHandler(event) {
        this.setState({
            username: event.target.value

        })
    }

    clickHandler(){
        let currentUser = this.state.allUsers;
        currentUser.push(this.state.username);
        this.setState({
            allUsers:currentUser,
            username:''
        })
    }

   
    radioHandler(ev) {
        let radioGroup = this.state.radioGroup;
        for (var key in radioGroup){
            radioGroup[key]=false
        }
        
        radioGroup[ev.target.value] = ev.target.checked

        this.setState({
            radioGroup:radioGroup
        })
    }

    checkHandler(ev){
        let checkGroup = this.state.checkGroup;
        for(var key in checkGroup){
            checkGroup[key]=false
        }

        checkGroup[ev.target.value] = ev.target.checked

        this.setState({
            checkGroup:checkGroup
        })
    }

    dropdownHandler(ev){
        this.setState({
            selectedValue : ev.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>Hello Forms</h1>
                <input type='text' name='username' value={this.state.username} onChange={this.formHandler}  />
                <br/>


                Devlopers Category:
                <br/>
                <label>
                 MEAN stack   <input type='radio' name='devcategory' value='meanStack' checked={this.state.radioGroup['meanStack']} onChange={this.radioHandler}/>
                </label>
                <br/>
                <label>
                 MERN stack   <input type='radio' name='devcategory' value='mernStack' checked={this.state.radioGroup['mernStack']} onChange={this.radioHandler}/>
                </label>
                <br/>
                <label>
                 LAMP stack   <input type='radio' name='devcategory' value='lampStack' checked={this.state.radioGroup['lampStack']} onChange={this.radioHandler}/>
                </label>
                <br/>

                 Technology:
                <br/>
                <label>
                 MongoDb  <input type='checkbox' name='teccategory' value='mongoDb' checked={this.state.checkGroup['mongoDb']} onChange={this.checkHandler}/>
                </label>
                <br/>
                <label>
                 React   <input type='checkbox' name='teccategory' value='reacto' checked={this.state.checkGroup['reacto']} onChange={this.checkHandler}/>
                </label>
                <br/>
                <label>
                 Node   <input type='checkbox' name='teccategory' value='nodeo' checked={this.state.checkGroup['nodeo']} onChange={this.checkHandler}/>
                </label>
                <br/>

                DropDown:
                <select value={this.state.selectedValue} onChange={this.dropdownHandler}>
                    <option value='Option1'>Option1</option>
                    <option value='Option2'>Option2</option>
                    <option value='Option3'>Option3</option>

                </select>


                <button onClick={this.clickHandler}>Save User</button>
                <p>{this.state.username}</p>
                <p>{this.state.allUsers}</p>
                
                
                </div>
        )
    }
}



export default Forms;