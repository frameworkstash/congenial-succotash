import React from 'react';
import ModalRoot from '../../components/ModalRoot';
import { Button, Grid, Header, Icon, Modal } from 'semantic-ui-react';

const LogIn = props => (
  <ModalRoot>
    <Modal.Content>
      <Grid textAlign="center" columns="equal" padded stretched>
        <Grid.Column>
          <Header as="h2">Login to Join The Community</Header>
          <p>
            Framework Stash is a community to share and geek out about<br />the
            latest tutorials. Join us :)
          </p>
        </Grid.Column>

        <Grid.Row>
          <Grid.Column>
            <Button color="twitter">
              <Icon name="twitter" /> LOGIN WITH TWITTER
            </Button>
          </Grid.Column>

          <Grid.Column>
            <Button color="facebook">
              <Icon name="facebook" /> LOGIN WITH FACEBOOK
            </Button>
          </Grid.Column>

          <Grid.Column>
            <Button color="black">
              <Icon name="github" /> LOGIN WITH GITHUB
            </Button>
          </Grid.Column>
        </Grid.Row>

        <Grid.Column>
          <p>
            We'll never post to any of your accounts without your permission.
          </p>
        </Grid.Column>
      </Grid>
    </Modal.Content>
  </ModalRoot>
);

export default LogIn;
