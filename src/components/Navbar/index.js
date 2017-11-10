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
  <Menu attached secondary size="small">
    <Container>
      <Menu.Item header fitted="horizontally">
        <Header as="h3" color="orange">
          <Icon name='code' />
          <Header.Content>
            Frameworkstash
            <Header.Subheader >
              Directory of tutorials for all levels
            </Header.Subheader>
          </Header.Content>
        </Header>
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item>
          <Dropdown basic pointing="top right" text="More">
            <Dropdown.Menu>
              <Dropdown.Item>Ask</Dropdown.Item>
              <Dropdown.Item>Projects</Dropdown.Item>
              <Dropdown.Item>News</Dropdown.Item>
              <Dropdown.Item>Jobs</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>About</Dropdown.Item>
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
