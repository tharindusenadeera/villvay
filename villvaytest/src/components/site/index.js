import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Cell } from 'react-mdl';
import NavBar from "../form-component/navbar";

class SiteIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { userDetail } = this.props;
        return ( 
            <Fragment>
                <NavBar />
                <div className="home-page">
                    <div className="text-center pt-3">
                        <h1>
                            Home Page
                        </h1>

                        <Grid className="landing-grid">
                            <Cell col={12}>
                                {/* <img src={userDetail && userDetail.data.avatar} alt="avatar" className="avatar-img" />
                                <div className="banner-text"><h1>{userDetail && userDetail.data.first_name}{""}{userDetail && userDetail.data.last_name}</h1>
                                </div>
                                <div className="banner-text"><h2>{userDetail && userDetail.data.email}</h2>
                                </div> */}
                            </Cell>
                        </Grid>
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
const mapStateToProps = state => ({
    authenticated: state.user.authenticated,
    userDetail: state.user.userDetail
  });
  
export default withRouter(connect(mapStateToProps)(SiteIndex));