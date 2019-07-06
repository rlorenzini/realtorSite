import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './styling/Login.css';
import './styling/SliderSwitch.css';

class Login extends Component {
  render(){
  return (
    <div className="loginPage">
    <span className="loginPageInnerDisplay">
      <h1>Sign In</h1>
      <div>
        <p className="loginPageLabel">Sign In</p>
        <input name="username" placeholder="username"/>
        <input name="password" placeholder="password" type="password"/>
        <button>Sign In</button>
      </div>
      <div>
      <p className="loginPageLabel">Register</p>
        <div className="realtorBooleanDiv">
        <p>Are you a realtor?</p>
          <label class="switch">
          <input type="checkbox"/>
          <span class="slider round"></span>
          </label>
          </div>
        <input name="username" placeholder="username"/>
        <input name="password" placeholder="password" type="password"/>
        <button>Register</button>
      </div>
      </span>
    </div>
  )};
}
// under sign in ask yes/no if realtor
//if yes unhide box with realtor info
//if yes send data to db as realtor and user

export default Login
