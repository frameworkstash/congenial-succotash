import React from 'react'
import {
  Button,
  Grid,
  Header,
  Segment
} from 'semantic-ui-react'

const Welcome = () => (
  <Segment attached padded="very">
    <Grid container divided='vertically'>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Header as="h1"><strong>Discover what you're looking for</strong></Header>
          <p color="grey">
            Framework Stash surfaces the best new tutorials, every day. It's a place for tech-loving enthusiasts to share and geek out about the latest Web, Mobile, AI, IoT, VR and many more articles.
          </p>
          <Button color="orange" size="large">
            Sign Up
          </Button>
        </Grid.Column>
        <Grid.Column textAlign="center" only='tablet computer'>
        {' < Image goes here > '}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default Welcome
