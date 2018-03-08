import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeActiveItem } from '../../actions/navigationAction';
import { Header, Icon, Menu, Segment, Sticky } from 'semantic-ui-react';

const Navigation = props => (
  <Sticky context={props.contextRef} offset={10}>
    <Segment vertical>
      <Header as="h5" color="grey">
        FEEDS
      </Header>
      <Menu secondary vertical fluid>
        <Menu.Item
          name="home"
          active={props.activeItem === 'home'}
          onClick={e => {
            props.changeActiveItem(e.target.text.toLowerCase());
          }}
        >
          <Icon.Group>
            <Icon color="grey" name="home" />
          </Icon.Group>
          Home
        </Menu.Item>

        <Menu.Item
          name="all topics"
          active={props.activeItem === 'all topics'}
          onClick={e => {
            props.changeActiveItem(e.target.text.toLowerCase());
          }}
        >
          <Icon.Group>
            <Icon color="grey" name="bars" />
          </Icon.Group>
          All Topics
        </Menu.Item>

        <Menu.Item
          color="orange"
          name="customize your feed"
          active={props.activeItem === 'customize your feed'}
          onClick={e => {
            props.changeActiveItem(e.target.text.toLowerCase());
          }}
        >
          <Icon.Group>
            <Icon color="grey" name="star" />
          </Icon.Group>
          Customize Your Feed
        </Menu.Item>
      </Menu>
    </Segment>
  </Sticky>
);

const mapStateToProps = state => ({
  activeItem: state.navigation.activeItem
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeActiveItem
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
