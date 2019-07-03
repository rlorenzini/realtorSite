import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class BaseLayout extends Component {
  render(){
  return (
    <div>
      <h3>This is the header</h3>
    </div>
  )};
}


export default BaseLayout
