import React from 'react'
import Navigation from '../Navigation'
import PrimaryContent from '../PrimaryContent'
import SecondaryContent from '../SecondaryContent'
import {
  Container,
  Grid
} from 'semantic-ui-react'

const Main = () => (
  <Container>
    <Grid padded="vertically">
      <Grid.Row>
        <Grid.Column width={3}>
          <Navigation />
        </Grid.Column>
        <Grid.Column width={8}>
          <PrimaryContent />
        </Grid.Column>
        <Grid.Column width={5}>
          <SecondaryContent />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default Main
