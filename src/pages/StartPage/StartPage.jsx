import React from 'react';
import Layout from 'terra-layout';
import Button from "terra-button";
import Grid from "terra-grid";
import { Link } from "react-router-dom";
import ActionHeader from "terra-action-header";
import styles from '../../StartPage.css';
import Image from 'terra-image';
import Heading from 'terra-heading';
import DynamicGrid from 'terra-dynamic-grid';
import Region from 'terra-dynamic-grid/lib/Region';


class StartPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
      return (
        <center>
            <div>
                <ActionHeader title = "Start Page"></ActionHeader>
            </div>
            <div className="rectangle-title">
                <p className="bear-scoresheets">BEAR Scoresheets</p>
            </div>
            <Image src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gr1viud2lr-140%3A84?alt=media&token=d53635ea-03e4-421e-b3da-4bc92fe3fc14" alt="default image"  className="LogoImage"/>
            <Button text="Login" variant="Neutral" className='button' style = {{border:"none", outline: "none"}}/>
            <Button text="Sign Up" variant="Neutral" className='button-1' style = {{border:"none", outline: "none"}}/>
        </center>
      );
    }
  }
  
  export default StartPage;
  