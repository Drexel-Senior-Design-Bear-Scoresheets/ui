import React, { useState } from "react";
import ActionHeader from "terra-action-header";
import Button from "terra-button";
import InputField from 'terra-form-input/lib/InputField';
import CustomToolbar from '../../CustomToolbar';
import axios from 'axios';
import '../../styles/Signin.css';
import {useNavigate} from 'react-router-dom';
import { setCookie } from "../../cookie";
import { signIn } from "../../auth";

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();

    signIn(username, password);
    alert("Signed in succesfully!");
    setTimeout(() => navigate('/landing'), 2000);
  };

  return (
      <div>
        <CustomToolbar />
        <center>
        <div className="signin-form">
        <div>
          <ActionHeader className="title" title="Sign In" />
          <p className="subtitle">Welcome back!</p>
        </div>
        <div>
          <form onSubmit={handleSignIn}>
            <div className="input-field-wrapper">
              <InputField
                inputId="username"
                label="Username"
                type="text"
                value={username}
                onChange={event => setUsername(event.target.value)}
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
        </center>
      </div>
    );
  };

export default SignInPage;
