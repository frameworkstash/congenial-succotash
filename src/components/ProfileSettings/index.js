import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Container, Header } from 'semantic-ui-react';

class ProfileSettings extends Component {
  render() {
    return (
      <DocumentTitle title="Settings">
        <Container>
          <Header as="h3">Settings</Header>
        </Container>
      </DocumentTitle>
    );
  }
}

export default ProfileSettings;
