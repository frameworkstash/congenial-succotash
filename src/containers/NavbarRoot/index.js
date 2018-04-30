import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modalAction';
import LoggedOutView from '../../components/Navbar/LoggedOutView';
import LoggedInView from '../../components/Navbar/LoggedInView';
import { Container, Header, Menu } from 'semantic-ui-react';

class NavbarRoot extends Component {
  render() {
    const { currentUser, dispatch } = this.props;
    return (
      <Menu attached borderless size="tiny">
        <Container>
          <Menu.Item header fitted="horizontally">
            <Header as="h3" color="blue">
              <Header.Content>
                Frameworkstash
                <Header.Subheader>
                  Directory of tutorials for all levels
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Menu.Item>

          <LoggedInView currentUser={currentUser} />

          <LoggedOutView
            openModal={type => dispatch(openModal(type))}
            currentUser={currentUser}
          />
        </Container>
      </Menu>
    );
  }
}

export default connect()(NavbarRoot);
