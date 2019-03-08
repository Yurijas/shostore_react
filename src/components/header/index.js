import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      // from navbar bootstrap4
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to='/'>Shoeshop</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to='/'>Shop <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/checkout'>Checkout</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
