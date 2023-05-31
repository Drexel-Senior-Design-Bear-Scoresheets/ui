import React, { useState } from "react";
import ActionHeader from "terra-action-header";
import Button from "terra-button";
import InputField from 'terra-form-input/lib/InputField';
import Select from 'terra-form-select/lib/Select';
import Checkbox from 'terra-form-checkbox';
import CheckboxField from 'terra-form-checkbox/lib/CheckboxField';
import CustomToolbar from '../../CustomToolbar';
import {useNavigate} from 'react-router-dom';
import { register } from "../../auth";


const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [institutionalAffiliation, setInstitutionalAffiliation] = useState('');
  const [role, setRole] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const navigate = useNavigate();

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

    register(name, username, password, email, institutionalAffiliation, role);

    navigate('/signin');
  };

  return (
    <>
      <CustomToolbar />
      <div>
      <div className="signup-form">
        <ActionHeader className="title" title="Sign Up" />
        <p className="subtitle">Create an account to continue</p>
      <form>
        <center>
      <InputField
          inputId="name"
          label="Name"
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <InputField
          inputId="username"
          label="Username"
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
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


        <Select
          label="Institutional Affiliation"
          value={institutionalAffiliation}
          onChange={(val) => setInstitutionalAffiliation(val)}
          placeholder="Select an institutional affiliation"
        >
          <Select.Option value="childrens-national" display="Children's National Hospital" />
        </Select>

        <Select
          label="Role"
          value={role}
          onChange={val => setRole(val)}
          placeholder="Select a role"
        >
          <Select.Option value="Admin" display="Admin" />
          <Select.Option value="Doctor" display="Doctor" />
          <Select.Option value="Nurse" display="Nurse" />
        </Select>

        <CheckboxField
          error={isInvalid ? errorMessage : ''}
          isInvalid={isInvalid}
          legend=""
        >
          <Checkbox
            id="agree-terms"
            name="agree-terms"
            
            checked={agreeTerms}
            onChange={event => setAgreeTerms(event.target.checked)}
          />
          <br/>
          <label>By making an account I agree to the Terms and Conditions</label>
        </CheckboxField>

        <Button className="button" text="Sign Up" onClick={handleSignUp} />

      <p className="haveAccount">Already have an account? <a className="link" href="/#/signin">Sign In</a></p>
      </center>
    </form>
    </div>
    </div>
    </>
  );
};

export default SignUpPage;
