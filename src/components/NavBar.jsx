import React, { Component } from 'react';
import { Navbar } from 'reactstrap';

class NavBar extends Component {

  render() {
    return (
      <header className='sticky'>
        <Navbar color="faded" light>
          <h1>Zoë Millard // zmillard.github.io</h1>
        </Navbar>
      </header>
    )
  }
}
export default NavBar;