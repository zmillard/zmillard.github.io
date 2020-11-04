import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Navbar, Collapse, NavbarToggler } from 'reactstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header className='sticky'>
        <Navbar color="faded" light>
          <h1>Zoë Millard // zmillard.github.io</h1>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href="https://drive.google.com/file/d/0BwB_0mp2DHyFXzlaWEplQ1VQdkIzQnh4UVc0a1J3cmVSWURZ/view?usp=sharing" download>Resume</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    )
  }
}
export default NavBar;