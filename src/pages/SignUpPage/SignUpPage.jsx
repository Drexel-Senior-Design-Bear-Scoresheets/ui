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
import style from '../../styles/SignUp.css';

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
          <ActionHeader className="title" title="Sign Up" />
          <p className="subtitle">Create an account to continue</p>
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
        
        <InputField className="inputField"
          inputId="confirm-password"
          label="Confirm Password"
          type="password"
          inputAttrs={{
            name: 'confirm-password',
            className: "input"
          }}
          labelAttrs={{
            className: "inputLabel",
          }} />

        <InputField className="inputField"
          inputId="name"
          label="Name"
          type="text"
          inputAttrs={{
            name: 'text',
            className: "input"
          }}
          labelAttrs={{
            className: "inputLabel",
          }} />

        <SingleSelectField className="selectField" 
          label="Institutional Affiliation" 
          placeholder="Select an institutional affiliation"
          labelAttrs={{
            className: "inputLabel",
          }}
          >
            <SingleSelectField.Option className="selectFieldOption" 
              value="childrens-national" 
              display="Children's National Hospital" 
              />
        </SingleSelectField>

        <CheckboxField
            error={"errorMessage"}
            isInvalid={this.state.isInvalid}
            legend=""
          >
            <Checkbox id="Agree" name="Agree" labelText="By making an account I agree to the Terms and Conditions" />
          </CheckboxField>
  
        <Button className="button" text="Sign Up" type={Button.Opts.Types.SUBMIT}/>
        </form>
        <p className="haveAccount">Already have an account? <a className="link" href="/#/signin">Sign In</a></p>
            
        </>
  
      );
  }
}

export default SignUpPage;
