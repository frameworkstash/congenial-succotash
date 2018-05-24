import React from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';

const ProfileSubTypeIsFetching = ({ message }) => (
  <Grid.Column width={8}>
    <Segment textAlign="center" basic>
      <Header size="medium" color="grey">
        {message}
      </Header>
    </Segment>
  </Grid.Column>
);
export default ProfileSubTypeIsFetching;
