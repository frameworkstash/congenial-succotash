import React, { Component } from 'react';
import Navigation from '../Navigation';
import PrimaryContent from '../PrimaryContent';
import SecondaryContent from '../SecondaryContent';
import { Container, Grid } from 'semantic-ui-react';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleContextRef = contextRef => this.setState({ contextRef });

  render() {
    const { contextRef } = this.state;

    return (
      <Container>
        <div ref={this.handleContextRef}>
          <Grid padded="vertically">
            <Grid.Row>
              <Grid.Column width={3}>
                <Navigation contextRef={contextRef} />
              </Grid.Column>
              <Grid.Column width={8}>
                <PrimaryContent />
              </Grid.Column>
              <Grid.Column width={5}>
                <SecondaryContent contextRef={contextRef} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Container>
    );
  }
}

export default Main;
