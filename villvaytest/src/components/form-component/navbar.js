import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isOpen: false
         }
    }

    toggle = () => {

    }

    render() { 
        const { isOpen } = this.state;
        const { authenticated } = this.props;

        return (
            <div>
            <Navbar color="fade" light expand="md" style={{backgroundColor: '#f1f1f1'}}>
              <NavbarBrand href="/">Villvay Test</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    {authenticated ? <NavLink href="/">Logout</NavLink> :  ""}
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
          );
    }
}

const mapStateToProps = state => ({
    authenticated: state.user.authenticated
  });
 
export default withRouter(connect(mapStateToProps)(NavBar));