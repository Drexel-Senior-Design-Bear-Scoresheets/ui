import React from 'react';
import Button from "terra-button";
import { Link } from "react-router-dom";
import '../../styles/StartPage.css';
import Image from 'terra-image';
import CustomToolbar from '../../CustomToolbar';
import Cookies from 'js-cookie';

class StartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout() {
    Cookies.set("isSignedIn", false)
    Cookies.set("authToken", null)
    window.location.reload(false);
  }

  render() {
    let loggedIn = JSON.parse(Cookies.get("isSignedIn"));
    if (loggedIn) {
      return (
        <center>
          <CustomToolbar />

          <div className="rectangle-title">
            <p className="bear-scoresheets">BEAR Scoresheets</p>
          </div>
          <div>
            <Image src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gr1viud2lr-140%3A84?alt=media&token=d53635ea-03e4-421e-b3da-4bc92fe3fc14" alt="default image" className="LogoImage" />
          </div>
          <Link to="/landing">
            <Button text="See Scoresheets" variant="Neutral" className='LoginButton' style={{ border: "none", outline: "none" }} />
          </Link>
          <Button text="Logout" variant="Neutral" className='SignupButton' style={{ border: "none", outline: "none" }} onClick={this.logout} />
        </center>
      );
    } else {
      return (
        <center>

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
      )
    }
  }
}

export default StartPage;
