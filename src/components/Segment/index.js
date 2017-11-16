import React, { Component } from 'react';
import LogInModal from '../LogInModal';
import { Button, Grid, Header, Segment } from 'semantic-ui-react';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

    return (
      <Segment attached padded="very">
        <LogInModal open={open} close={this.close} />

        <Grid container divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header as="h1">
                <strong>Discover what you're looking for</strong>
              </Header>
              <p color="grey">
                Framework Stash surfaces the best new tutorials, every day. It's
                a place for tech-loving enthusiasts to share and geek out about
                the latest Web, Mobile, AI, IoT, VR and many more articles.
              </p>
              <Button color="orange" size="large" onClick={this.open}>
                Sign Up
              </Button>
            </Grid.Column>
            <Grid.Column textAlign="center" only="tablet computer">
              {' < Image goes here > '}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Welcome;
