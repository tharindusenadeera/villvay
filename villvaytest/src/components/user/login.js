import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { GoogleLogin } from "react-google-login-component";
import { getLoggedUser, loginGoogle } from "../../action-creator/user";
import { Button, Input, Form, FormGroup } from "reactstrap";
import NavBar from '../form-component/navbar';

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: "",
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
        return errors;
      };

    handleEmail = e => {
        this.setState({ email : e.target.value })
    }

    handlePassword = e => {
        this.setState({ password: e.target.value })
    }

    handleSubmit = () => {
        const { email, password } = this.state;
        const { dispatch } = this.props;

        const data = {
            email : email,
            password: password
        }

        const errors = this._validate(data);

        if (!Object.keys(errors).length) {
            dispatch(getLoggedUser(data));  
        } else {
          this.setState({ errorMessage: errors },
            () => {
                setTimeout(() => {
                  this.setState({ errorMessage: {} });
                }, 2000);
              } );
        }
    }

    responseGoogle = e => {
        const { dispatch, callBack } = this.props;
        const extraParams = {};
        dispatch(loginGoogle(e, callBack, extraParams));
      };

    render() { 
        const { email, password, errorMessage } = this.state;
        return ( 
            <Fragment>
                <NavBar />
                <div className="login-form">
                    <div className="text-center pt-3">
                    <h1>Log In</h1>
                    </div>
                    <FormGroup>
                        <Input 
                            placeholder="Email *"
                            type="email"
                            value={email}
                            onChange={e => this.handleEmail(e)}
                        />
                        {errorMessage && errorMessage.email && (
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
                            onChange={e => this.handlePassword(e)}
                        />
                        {errorMessage && errorMessage.password && (
                            <span style={{ color: "red", fontSize: 10 }}>
                            {errorMessage.password}
                            </span>
                        )}
                    </FormGroup>

                <div>
                    <div>
                        <Button type="submit" className="btn-lg btn-dark btn-block" onChange={() => this.handleSubmit()}> Log In</Button>
                    </div>
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
                </div>
                <hr />
                    <div>
                        <p>
                        Don’t have an  account ? <a href="/signup">Sign up</a>
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
  
export default withRouter(connect(mapStateToProps)(LogIn));