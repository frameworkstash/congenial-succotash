import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import ProfileSettingsDetails from '../ProfileSettingsDetails';
import DetailsForm from '../DetailsForm';
import { Container, Grid, Header } from 'semantic-ui-react';

class ProfileSettings extends Component {
  render() {
    const {
      email,
      photoURL,
      headline,
      firstName,
      lastName,
      username
    } = this.props.currentUser;
    return (
      <DocumentTitle title="Settings">
        <Container>
          <Grid padded="vertically">
            <Grid.Row>
              <Grid.Column>
                <Header size="huge">Settings</Header>
              </Grid.Column>
            </Grid.Row>
            <ProfileSettingsDetails>
              <DetailsForm
                email={email}
                headline={headline}
                username={username}
                firstName={firstName}
                lastName={lastName}
                avatar={photoURL}
              />
            </ProfileSettingsDetails>
          </Grid>
        </Container>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.common.currentUser
});

export default connect(mapStateToProps)(ProfileSettings);
