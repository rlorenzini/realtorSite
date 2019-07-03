import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './styling/Header.css';

class BaseLayout extends Component {
  render(){
  return (
    <div className="headerMenu">
    <ul>
      <li>Home</li>
      <li>Page 1</li>
      <li>Page 2</li>
      </ul>
    </div>
  )};
}


export default BaseLayout
