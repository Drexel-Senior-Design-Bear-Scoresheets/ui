import React from "react";
import { Link } from "react-router-dom";
import ActionHeader from "terra-action-header";
import OverlayContainer from "terra-overlay/lib/OverlayContainer";
import Button from "terra-button";
import Grid from "terra-grid";

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  onButtonClick() {
    this.setState({
      count: this.state.count += 1
    });
  }

  render() {
    return (
      <div>
        <ActionHeader title="This is the about page." />
        <Grid.Row>
          <Grid.Column tiny={6}>
            <Link to="/">Home Page</Link>
          </Grid.Column>
          <Grid.Column tiny={6}>
            <Button onClick={() => this.onButtonClick()} text="Add one" />
            <p>Count: {this.state.count}</p>
          </Grid.Column>
        </Grid.Row>
      </div>
    );
  }
}

export default AboutPage;
