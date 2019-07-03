import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './styling/Header.css';

class BaseLayout extends Component {
  render(){
  return (
    <div className="headerMenu">
    <ul>
    <NavLink to='/'>
      <li>Home</li>
      </NavLink>
      <NavLink to='/login'>
      <li>Login</li>
      </NavLink>
      <li>Page 2</li>
      </ul>
    </div>
  )};
}


export default BaseLayout
