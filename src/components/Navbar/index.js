import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modalAction';
import LogInModal from '../LogInModal';
import {
  Button,
  Container,
  Dropdown,
  Header,
  Icon,
  Menu
} from 'semantic-ui-react';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu attached borderless size="tiny">
        <LogInModal />

        <Container>
          <Menu.Item header fitted="horizontally">
            <Header as="h3" color="orange">
              <Icon name="code" />
              <Header.Content>
                Framework Stash
                <Header.Subheader>
                  Directory of tutorials for all levels
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              <Dropdown basic pointing="top right" text="More">
                <Dropdown.Menu>
                  <Dropdown.Item>ASK</Dropdown.Item>
                  <Dropdown.Item>SHOWCASE</Dropdown.Item>
                  <Dropdown.Item>COLLECTIONS</Dropdown.Item>
                  <Dropdown.Item>NEWS</Dropdown.Item>
                  <Dropdown.Item>JOBS</Dropdown.Item>
                  <Dropdown.Item>NEWSLETTER</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>ABOUT</Dropdown.Item>
                  <Dropdown.Item>FAQ</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>

            <Menu.Item>
              <Button onClick={this.props.openModal} compact>
                LOG IN
              </Button>
            </Menu.Item>

            <Menu.Item>
              <Button color="orange" onClick={this.props.openModal} compact>
                SIGN UP
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      openModal
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Navbar);
