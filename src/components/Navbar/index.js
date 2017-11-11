import React from 'react'
import {
  Button,
  Container,
  Dropdown,
  Header,
  Icon,
  Menu
 } from 'semantic-ui-react'

const Navbar = () => (
  <Menu attached borderless size="tiny">
    <Container>
      <Menu.Item header fitted="horizontally">
        <Header as="h3" color="orange">
          <Icon name='code' />
          <Header.Content>
            Framework Stash
            <Header.Subheader >
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
          <Button compact>
            Log In
          </Button>
        </Menu.Item>

        <Menu.Item>
          <Button color="orange" compact>
            Sign Up
          </Button>
        </Menu.Item>
      </Menu.Menu>

    </Container>
  </Menu>
)

export default Navbar
