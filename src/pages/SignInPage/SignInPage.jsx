import React from "react";
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import ActionHeader from "terra-action-header";
import OverlayContainer from "terra-overlay/lib/OverlayContainer";
import Button from "terra-button";
import Grid from "terra-grid";
import InputField from 'terra-form-input/lib/InputField';
import Hyperlink from 'terra-hyperlink';
import style from '../../styles/SignIn.css';


class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
      <div>
        <ActionHeader className="title" title="Sign In" />
        <p className="subtitle">Welcome back!</p>
      </div>
      <form>
      <InputField className="inputField"
        inputId="email"
        label="Email"
        type="email"
        labelAttrs = {{
          className: "inputLabel"
        }}
        inputAttrs={{
          className: "input"
        }} />

      <InputField className="inputField"
        inputId="password"
        label="Password"
        type="password"
        inputAttrs={{
          name: 'password',
          className: "input"
        }}
        labelAttrs={{
          className: "inputLabel",
        }} />

      <Button className="button" text="Sign In" type={Button.Opts.Types.SUBMIT}/>
      </form>
      <p className="haveAccount">Don't have an account? <a className="link" href="/#/signup" >Sign Up</a></p>
          
      </>

    );
  }
}



export default SignInPage;
