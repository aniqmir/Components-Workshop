import React, { Component } from 'react';

class Method extends Component {

    myfacebook() {
        return 'http://www.facebook.com/aniq.mir';
    }

    username() {
        return 'Muhammad Aniq Mir';
    }
    render() {
        return (
            <div>
                <p>
                    Hello, React ahista ahista agay barh rahi hai!!, koshish kartay raho..
                    <a href={this.myfacebook()}>{this.username()}</a>
                </p>

            </div>
        
        );
    
    }
}

export default Method;