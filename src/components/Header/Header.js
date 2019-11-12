import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

class Header extends Component {

  state = {
    isOpen: false
  };

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  }

  render(){
    return(
      <React.Fragment>
        <Navbar color="primary" light expand="md">
          <NavbarBrand href="#" className="text-light">
            Logo
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse className="justify-content-end" isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#" className="text-light">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"className="text-light">
                  Money Transfer
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="text-light">
                  Solutions For Business
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="text-light">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="text-light">
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <Button variant="secondary">Register</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>

    );
  }
}
export default Header;
