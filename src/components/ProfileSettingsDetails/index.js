import React from 'react';
import { Button, Grid, Header, Segment } from 'semantic-ui-react';

const ProfileSettingsDetails = props => (
  <Grid.Row>
    <Grid.Column>
      <Segment>
        <Header dividing>My Details</Header>
        {props.children}
      </Segment>
      <Button color="blue">UPDATE</Button>
    </Grid.Column>
  </Grid.Row>
);

export default ProfileSettingsDetails;
