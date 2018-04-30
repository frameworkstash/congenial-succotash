import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ModalRoot from '../../components/ModalRoot';
import {
  signInWithGithub,
  signInWithFacebook,
  signInWithTwitter
} from '../../actions/authActions';
import { Button, Grid, Header, Icon, Modal } from 'semantic-ui-react';

class LogIn extends Component {
  render() {
    return (
      <ModalRoot>
        <Modal.Content>
          <Grid textAlign="center" columns="equal" padded stretched>
            <Grid.Column>
              <Header as="h2">Login to Join The Community</Header>
              <p>
                Frameworkstash is a community to share and geek out about<br />the
                latest tutorials. Join us :)
              </p>
            </Grid.Column>

            <Grid.Row>
              <Grid.Column>
                <Button onClick={() => signInWithTwitter()} color="twitter">
                  <Icon name="twitter" /> LOGIN WITH TWITTER
                </Button>
              </Grid.Column>

              <Grid.Column>
                <Button onClick={() => signInWithFacebook()} color="facebook">
                  <Icon name="facebook" /> LOGIN WITH FACEBOOK
                </Button>
              </Grid.Column>

              <Grid.Column>
                <Button onClick={() => signInWithGithub()} color="black">
                  <Icon name="github" /> LOGIN WITH GITHUB
                </Button>
              </Grid.Column>
            </Grid.Row>

            <Grid.Column>
              <p>
                We'll never post to any of your accounts without your
                permission.
              </p>
            </Grid.Column>
          </Grid>
        </Modal.Content>
      </ModalRoot>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signInWithGithub,
      signInWithFacebook,
      signInWithTwitter
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(LogIn);
