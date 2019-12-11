import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SiteIndex from "../site";
import LogIn from "../user/login";

class LandingIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { authenticated } = this.props;
        
        return ( 
            <Fragment>
                {!authenticated ? <LogIn /> : <SiteIndex />}
            </Fragment>
         );
    }
}

const mapStateToProps = state => ({
    authenticated: state.user.authenticated
  });
  
export default withRouter(connect(mapStateToProps)(LandingIndex));