import React, { useState } from "react";
import ActionHeader from "terra-action-header";
import Button from "terra-button";
import InputField from 'terra-form-input/lib/InputField';
import CustomToolbar from '../../CustomToolbar';
import axios from 'axios';
import '../../styles/Signin.css';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();

    // Create an object with the input values
    const signInData = {
      email,
      password
    };

    // Make the API call to send the sign-in data
    axios.post('your-api-endpoint', signInData)
      .then(response => {
        // Handle the response
        console.log('Sign In Success:', response);
      })
      .catch(error => {
        // Handle the error
        console.error('Sign In Error:', error);
      });
  };

  return (
      <div>
        <CustomToolbar />
        <div className="signin-container">
        <div>
          <ActionHeader className="title" title="Sign In" />
          <p className="subtitle">Welcome back!</p>
        </div>
        <div className="signin-form">
          <form onSubmit={handleSignIn}>
            <div className="input-field-wrapper">
              <InputField
                inputId="email"
                label="Email"
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                className="inputField"
                inputAttrs={{
                  className: "input"
                }}
                labelAttrs={{
                  className: "inputLabel"
                }}
              />
            </div>
  
            <div className="input-field-wrapper">
              <InputField
                inputId="password"
                label="Password"
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                className="inputField"
                inputAttrs={{
                  className: "input"
                }}
                labelAttrs={{
                  className: "inputLabel"
                }}
              />
            </div>
  
            <Button className="button" text="Sign In" type={Button.Opts.Types.SUBMIT} />
          </form>
          <p className="haveAccount">Don't have an account? <a className="link" href="/#/signup">Sign Up</a></p>
        </div>
        </div>
      </div>
    );
  };

export default SignInPage;
