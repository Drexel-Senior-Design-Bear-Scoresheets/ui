import React from "react";
import { Link } from "react-router-dom";
import ActionHeader from "terra-action-header";
import OverlayContainer from "terra-overlay/lib/OverlayContainer";
import Button from "terra-button";
import Grid from "terra-grid";

const AboutPage = () => (
  <div>
    <ActionHeader title="This is the about page." />
    <Grid.Row>
      <Grid.Column tiny={6}>
        <Link to="/">Home Page</Link>
      </Grid.Column>
      <Grid.Column tiny={6}>
        <Button onClick={() => alert("Hello!")} text="Show alert" />
      </Grid.Column>
    </Grid.Row>
  </div>
);

export default AboutPage;
