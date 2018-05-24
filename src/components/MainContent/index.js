import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';

class MainContent extends Component {
  render() {
    return (
      <Grid.Column width={8}>
        <Segment.Group>{this.props.children}</Segment.Group>
      </Grid.Column>
    );
  }
}

export default MainContent;
