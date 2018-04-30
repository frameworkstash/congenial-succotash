import React from 'react';
import { Button, Menu } from 'semantic-ui-react';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <React.Fragment>
        <Menu.Menu position="right">
          {/* <Menu.Item fitted='horizontally'>
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
          </Menu.Item> */}

          <Menu.Item>
            <Button
              onClick={() => {
                props.openModal('MODAL_TYPE_LOGIN');
              }}
              compact
            >
              LOG IN
            </Button>
          </Menu.Item>

          <Menu.Item fitted="horizontally">
            <Button
              onClick={() => {
                props.openModal('MODAL_TYPE_LOGIN');
              }}
              color="blue"
              compact
            >
              SIGN UP
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </React.Fragment>
    );
  }
  return null;
};

export default LoggedOutView;
