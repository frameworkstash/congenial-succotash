import React from 'react'
import Navigation from '../Navigation'
import {
  Container,
  Grid,
  Segment
} from 'semantic-ui-react'

const Main = () => (
  <Container>
    <Grid columns="equal" padded="vertically">
      <Grid.Row>
        <Grid.Column>
          <Navigation />
        </Grid.Column>
        <Grid.Column width={8}>
          <Segment>2</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>3</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default Main
