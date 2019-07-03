import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Header from './Header.js';
import './styling/BaseLayout.css';

class BaseLayout extends Component {
  render(){
  return (
    <div>
      <Header className=".headerOrientation"/>
      <h1>BaseLayout</h1>
      {this.props.children}
    </div>
  )};
}


export default BaseLayout
