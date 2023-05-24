import React from "react";
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import ActionHeader from "terra-action-header";
import OverlayContainer from "terra-overlay/lib/OverlayContainer";
import Button from "terra-button";
import Grid from "terra-grid";
import InputField from 'terra-form-input/lib/InputField';
import Hyperlink from 'terra-hyperlink';
import SingleSelect from 'terra-form-select/lib/SingleSelect';
import SingleSelectField from 'terra-form-select/lib/SingleSelectField';
import Checkbox from 'terra-form-checkbox';
import CheckboxField from 'terra-form-checkbox/lib/CheckboxField';
import '../../App.css';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <>
        <div>
          <ActionHeader title="Sign Up" />
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
        
        <InputField
          inputId="confirm-password"
          label="Confirm Password"
          type="password"
          inputAttrs={{
            name: 'confirm-password',
          }} />

        <InputField
          inputId="name"
          label="Name"
          type="text"
          inputAttrs={{
            name: 'text',
          }} />

        <SingleSelectField label="Institutional Affiliation" placeholder="Select an institutional affiliation">
            <SingleSelectField.Option value="childrens-national" display="Children's National Hospital" />
        </SingleSelectField>

        <CheckboxField
            error={"errorMessage"}
            isInvalid={this.state.isInvalid}
            legend=""
          >
            <Checkbox id="Agree" name="Agree" labelText="By making an account I agree to the Terms and Conditions" />
          </CheckboxField>
  
        <Button text="Sign Up" type={Button.Opts.Types.SUBMIT}/>
        </form>
        <p>Already have an account? <Hyperlink  href="/#/signin">Sign In</Hyperlink></p>
            
        </>
  
      );
  }
}

export default SignUpPage;
