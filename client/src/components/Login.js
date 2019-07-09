import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './styling/Login.css';
import './styling/SliderSwitch.css';
import './styling/checkBox.css';

class Login extends Component {
  constructor(){
    super()
    this.handleCheckBox = this.handleCheckBox.bind(this)
    this.state={
      checked: false,
      hidden: "isHidden"
    }
  //   this.setState(prevState => ({
  //     check: !prevState.check
  //   }))
  }
  handleCheckBox(e) {
   this.setState({
     checked: e.target.checked
   })
   console.log(this.state.checked)
 }
  render(){
  return (
    <div className="loginPage">
    <span className="loginPageInnerDisplay">
      <h1>Sign In</h1>
      <div>
        <p className="loginPageLabel">Sign In</p>
        <input className="loginPageInputBox" name="username" placeholder="username"/>
        <input className="loginPageInputBox" name="password" placeholder="password" type="password"/>
        <button className="loginPageButton">Sign In</button>
      </div>
      <div>
      <p className="loginPageLabel">Register</p>
        <div className="realtorBooleanDiv">
        <p className="booleanQuestion">Are you a realtor?</p>
          <label className="container">
          <input type="checkbox" checked={this.state.check} onChange={this.handleCheckBox}/>
          <span className="checkmark"></span>
          </label>
          </div>
        <input className="loginPageInputBox" name="username" placeholder="username"/>
        <input className="loginPageInputBox" name="password" placeholder="password" type="password"/>
        <button className="loginPageButton">Register</button>
      </div>
      </span>
    </div>
  )};
}
//under sign in ask yes/no if realtor
//if yes unhide box with realtor info
//if yes send data to db as realtor and user


//need to change state with checkbox
//when checked display new input fields for realtors 
export default Login
