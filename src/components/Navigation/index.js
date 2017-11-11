import React, { Component } from 'react'
import {
  Header,
  Icon,
  Menu,
  Segment
 } from 'semantic-ui-react'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return(
      <Segment vertical>
        <Header as="h5" color="grey">FEEDS</Header>
        <Menu secondary vertical fluid>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
            <Icon.Group >
              <Icon color="grey" name="home" />
            </Icon.Group>
            Home
          </Menu.Item>

          <Menu.Item name="all topics" active={activeItem === "all topics"} onClick={this.handleItemClick}>
            <Icon.Group >
              <Icon color="grey" name="bars" />
            </Icon.Group>
            All Topics
          </Menu.Item>

          <Menu.Item color="orange" name="customize your feed" active={activeItem === "customize your feed"} onClick={this.handleItemClick}>
            <Icon.Group >
              <Icon color="grey" name="star" />
            </Icon.Group>
            Customize Your Feed
          </Menu.Item>
        </Menu>
      </Segment>
    )
  }
}

export default Navigation
