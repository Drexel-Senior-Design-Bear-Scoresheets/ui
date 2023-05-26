import React from 'react';
import Layout from 'terra-layout';
import Button from "terra-button";
import Grid from "terra-grid";
import { Link } from "react-router-dom";
import ActionHeader from "terra-action-header";
import '../../styles/StartPage.css';
import Image from 'terra-image';

class StartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <center>
        <div>
          <ActionHeader title="Start Page" />
        </div>
        <div className="rectangle-title">
          <p className="bear-scoresheets">BEAR Scoresheets</p>
        </div>
        <div>
          <Image src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gr1viud2lr-140%3A84?alt=media&token=d53635ea-03e4-421e-b3da-4bc92fe3fc14" alt="default image" className="LogoImage" />
        </div>
        <Link to="/signin">
          <Button text="Login" variant="Neutral" className='LoginButton' style={{ border: "none", outline: "none" }} />
        </Link>
        <Link to="/signup">
          <Button text="Sign Up" variant="Neutral" className='SignupButton' style={{ border: "none", outline: "none" }} />
        </Link>
      </center>
    );
  }
}

export default StartPage;
