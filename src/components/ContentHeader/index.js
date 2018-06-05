import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class ContentHeader extends Component {
  render() {
    return (
      <Header as="h3" attached="top">
        {this.props.title}
      </Header>
    );
  }
}

export default ContentHeader;
