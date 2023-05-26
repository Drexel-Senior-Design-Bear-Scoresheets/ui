import React, { useState } from "react";
import ActionHeader from "terra-action-header";
import Button from "terra-button";
import InputField from 'terra-form-input/lib/InputField';
import SelectField from 'terra-form-select/lib/SelectField';
import Checkbox from 'terra-form-checkbox';
import CheckboxField from 'terra-form-checkbox/lib/CheckboxField';
import axios from 'axios';
import CustomToolbar from '../../CustomToolbar';


const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [institutionalAffiliation, setInstitutionalAffiliation] = useState('');
  const [role, setRole] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setIsInvalid(true);
      setErrorMessage("Passwords don't match");
      return;
    }

    if (!agreeTerms) {
      setIsInvalid(true);
      setErrorMessage("Please agree to the Terms and Conditions");
      return;
    }

    // Create an object with the input values
    const signUpData = {
      email,
      password,
      name,
      institutionalAffiliation,
      role
    };

    // Make the API call to send the sign-up data
    axios.post('your-api-endpoint', signUpData)
      .then(response => {
        // Handle the response
        console.log('Sign Up Success:', response);
      })
      .catch(error => {
        // Handle the error
        console.error('Sign Up Error:', error);
      });
  };

  return (
    <>
      <CustomToolbar />
      <div>
        <ActionHeader className="title" title="Sign Up" />
        <p className="subtitle">Create an account to continue</p>
      </div>
      <form>
      <InputField
          inputId="name"
          label="Name"
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <InputField
          inputId="email"
          label="Email"
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <InputField
          inputId="password"
          label="Password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <InputField
          inputId="confirm-password"
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
          error={isInvalid ? errorMessage : ''}
        />


        <SelectField
          label="Institutional Affiliation"
          value={institutionalAffiliation}
          onChange={event => setInstitutionalAffiliation(event.target.value)}
          placeholder="Select an institutional affiliation"
        >
          <SelectField.Option value="childrens-national" display="Children's National Hospital" />
        </SelectField>

        <SelectField
          label="Role"
          value={role}
          onChange={event => setRole(event.target.value)}
          placeholder="Select a role"
        >
          <SelectField.Option value="role1" display="Role 1" />
          <SelectField.Option value="role2" display="Role 2" />
          <SelectField.Option value="role3" display="Role 3" />
        </SelectField>

        <CheckboxField
          error={isInvalid ? errorMessage : ''}
          isInvalid={isInvalid}
          legend=""
        >
          <Checkbox
            id="agree-terms"
            name="agree-terms"
            labelText="By making an account I agree to the Terms and Conditions"
            checked={agreeTerms}
            onChange={event => setAgreeTerms(event.target.checked)}
          />
        </CheckboxField>

        <Button className="button" text="Sign Up" onClick={handleSignUp} />

      <p className="haveAccount">Already have an account? <a className="link" href="/#/signin">Sign In</a></p>
    </form>
    </>
  );
};

export default SignUpPage;
