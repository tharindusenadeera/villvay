import React, { Component, Fragment } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <div>Email</div>
                <div>Password</div>
                <div>Password confirm</div>
            </Fragment> 
        );
    }
}
 
export default SignUp;