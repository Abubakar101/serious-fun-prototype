import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../modules/Auth';

const Nav = props => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbra-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#MyNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand"><img src='' alt="" /></a>
        </div>
        <div className="collapse navbar-collapse" id="MyNavbar">
            {!Auth.isUserAuthenticated() ? (
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/schools">Schools</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            ) : (
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/">Home</Link></li>                      
                    <li><Link to="/schools">Schools</Link></li>
                    <li><Link to="/dashboard">My Dashboard</Link></li>
                    <li><Link to="/logout" onClick={props.handleLogout}>Log Out</Link></li>
                </ul>
            )}
        </div>
      </div>
    </nav>
  )
}

export default Nav;