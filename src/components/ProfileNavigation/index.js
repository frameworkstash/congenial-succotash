import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Menu, Segment } from 'semantic-ui-react';

class ProfileNavigation extends Component {
  render() {
    return (
      <Grid.Column width={4}>
        <Segment vertical>
          <Menu secondary vertical fluid>
            <Menu.Item
              name="upvotes"
              active={this.props.location.pathname === this.props.match.url}
            >
              <NavLink to={this.props.match.url}>{`${
                this.props.upvotesTotal
              } Upvotes`}</NavLink>
            </Menu.Item>

            <Menu.Item
              name="submitted"
              active={
                this.props.location.pathname ===
                `${this.props.match.url}/submitted`
              }
            >
              <NavLink to={`${this.props.match.url}/submitted`}>{`${
                this.props.submittedTotal
              } Submitted`}</NavLink>
            </Menu.Item>

            <Menu.Item
              name="made"
              active={
                this.props.location.pathname === `${this.props.match.url}/made`
              }
            >
              <NavLink to={`${this.props.match.url}/made`}>{`${
                this.props.madeTotal
              } Made`}</NavLink>
            </Menu.Item>
          </Menu>
        </Segment>
      </Grid.Column>
    );
  }
}

export default ProfileNavigation;
