import React from "react";
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import ActionHeader from "terra-action-header";
import OverlayContainer from "terra-overlay/lib/OverlayContainer";
import Button from "terra-button";
import Grid from "terra-grid";
import InputField from 'terra-form-input/lib/InputField';
import Hyperlink from 'terra-hyperlink';


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
        <ActionHeader title="Sign In" />
      </div>
      <form>
      <InputField
        inputId="email"
        label="Email"
        type="email"
        inputAttrs={{
          name: 'email',
        }} />

      <InputField
        inputId="password"
        label="Password"
        type="password"
        inputAttrs={{
          name: 'password',
        }} />

      <Button text="Sign In" type={Button.Opts.Types.SUBMIT}/>
      </form>
      <p>Don't have an account? <Hyperlink  href="/#/signup">Sign Up</Hyperlink></p>
          
      </>

    );
  }
}



export default SignInPage;
