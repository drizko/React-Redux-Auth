import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {

  renderLinks(){
    if(this.props.authenticated){
      // show a link to sign out
      return (
        <li className="nav-item">
          <Link onClick={this.signOut} to="/signout" className="nav-link">Sign Out</Link>
        </li>
      )
    }

    // show a link to signin or signup
    return [
      <li key={1} className="nav-item">
        <Link className="nav-link" to="/signin">
          Sign In
        </Link>
      </li>,
      <li key={2} className="nav-item">
        <Link className="nav-link" to="/signup">
          Sign Up
        </Link>
      </li>
    ]

  }

  render(){
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Redux Auth</Link>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
