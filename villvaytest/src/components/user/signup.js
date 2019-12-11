import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { GoogleLogin } from "react-google-login-component";
import { getUserSignUp, loginGoogle } from "../../action-creator/user";
import { Button, Input, Form, FormGroup } from "reactstrap";
import NavBar from "../form-component/navbar";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: "",
            confirmPassword: "",
            errorMessage: {}
         }
    }

    _validate = data => {
        const errors = {};
        if (!data.email || data.email == "") {
          errors.email = "Email is required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
        ) {
          errors.email = "Invalid Email Address";
        }
        if (!data.password || data.password == "") {
          errors.password = "Password is required";
        }
        if (!data.confirmPassword || data.confirmPassword == "") {
            errors.confirmPassword = "Please enter the password again";
          }
        if (data.password !== data.confirmPassword){
            errors.confirmPassword = "Please Enter the correct password";
        }
        return errors;
      };

    onChangeEmail = e => {
        this.setState({ email: e.target.value})
    }

    onChangePassword = e => {
        this.setState({ password: e.target.value })
    }

    onChangePasswordConfirm = e => {
        this.setState({ confirmPassword : e.target.value})
    }

    responseGoogle = e => {
        const { dispatch, callBack } = this.props;
        const extraParams = {};
        dispatch(loginGoogle(e, callBack, extraParams));
      };

    handleSubmit = () => {
        const { email, password, confirmPassword} = this.state;
        const { dispatch } = this.props;
        
        const data = {
            email : email,
            password: password,
            confirmPassword: confirmPassword
        }

        const errors = this._validate(data);

        const newData = {
            email : email,
            password: password
        };
        
        if (!Object.keys(errors).length) {
            dispatch(getUserSignUp(newData)); 
        } else {
          this.setState({ errorMessage: errors },
            () => {
                setTimeout(() => {
                  this.setState({ errorMessage: {} });
                }, 2000);
              } );
        }

    }

    render() { 
        const { email, password, confirmPassword, errorMessage} = this.state;
        return ( 
            <Fragment>
                <NavBar />
                <div className="login-form">
                <div className="text-center pt-3">
                    <h1>Sign Up</h1>
                </div>
                <FormGroup>
                        <Input 
                            placeholder="Email *"
                            type="email"
                            value={email}
                            onChange={e => this.onChangeEmail(e)}
                        />
                        {errorMessage && errorMessage.email &&  (
                            <span style={{ color: "red", fontSize: 10 }}>
                            {errorMessage.email}
                            </span>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Input 
                            placeholder="Password *"
                            type="password"
                            value={password}
                            onChange={e => this.onChangePassword(e)}
                        />
                        {errorMessage && errorMessage.password &&  (
                            <span style={{ color: "red", fontSize: 10 }}>
                            {errorMessage.password}
                            </span>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Input 
                            placeholder="Confirm Password *"
                            type="password"
                            value={confirmPassword}
                            onChange={e => this.onChangePasswordConfirm(e)}
                        />
                        {errorMessage && errorMessage.confirmPassword &&  (
                            <span style={{ color: "red", fontSize: 10 }}>
                            {errorMessage.confirmPassword}
                            </span>
                        )}
                    </FormGroup>
                        <Button type="submit" className="btn-lg btn-dark btn-block" onClick={() => this.handleSubmit()}> Sign Up</Button>
                    <div className="mt-3 mb-3">
                        <GoogleLogin
                            socialId="308823851175-3hl3te1anbvkvliperkqer73mv8akq7i.apps.googleusercontent.com"
                            className="btn-md btn-primary btn-block"
                            scope="profile"
                            fetchBasicProfile={true}
                            responseHandler={this.responseGoogle}
                            buttonText=""
                        >
                            <img
                            className="img-responsive sl-go"
                            src="/images/google-icon.png"
                            title="Google"
                            />
                            &nbsp;&nbsp;&nbsp;
                            <span>Login with google</span>
                        </GoogleLogin>
                    </div>
                    <div>
                        <p>
                            Already have an account ?<a href="/login"> Login</a>
                        </p>
                    </div>
            </div> 
            </Fragment>
        );
    }
}
 
const mapStateToProps = state => ({
    authenticated: state.user.authenticated
  });
  
export default withRouter(connect(mapStateToProps)(SignUp));