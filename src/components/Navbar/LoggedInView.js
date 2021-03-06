import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';
import { Dropdown, Icon, Image, List, Menu, Popup } from 'semantic-ui-react';

const LoggedInView = props => {
  if (!!props.currentUser) {
    return (
      <React.Fragment>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to="/posts/new">
              <Popup
                trigger={<Icon name="add" size="large" color="grey" link />}
                content="Post a tutorial"
                position="bottom center"
                size="mini"
                inverted
                hideOnScroll
              />
            </Link>
          </Menu.Item>
          <Menu.Item fitted="horizontally">
            <Dropdown
              trigger={<Icon name="bell" color="grey" link circular inverted />}
              pointing="top right"
              icon={null}
            >
              <Dropdown.Menu>
                <Dropdown.Header content="Notifications" />
                <Dropdown.Divider />
                <Dropdown.Item>
                  <List selection verticalAlign="middle" size="large">
                    <List.Item>
                      <Image
                        avatar
                        src="https://graph.facebook.com/1713423385369834/picture"
                      />
                      <List.Content>
                        <List.Header>John Doe</List.Header>
                        <List.Description>
                          Mentioned you in a comment on your post "<a>
                            <b>deleniti</b>
                          </a>"
                        </List.Description>
                        <List.Description color="grey">
                          <span
                            role="img"
                            aria-label="jsx-a11y/accessible-emoji"
                          >
                            📝
                          </span>{' '}
                          5 days ago
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header content="See all" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Dropdown
              trigger={
                <Image
                  src={props.currentUser.photoURL}
                  size="mini"
                  bordered
                  circular
                  avatar
                />
              }
              pointing="top right"
              floating
              icon={null}
            >
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to={`/@${props.currentUser.username}`}>MY PROFILE</Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link to="/my/settings/edit">SETTINGS</Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={props.onClickLogout}>
                  LOGOUT
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      </React.Fragment>
    );
  }
  return null;
};

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => dispatch({ type: LOGOUT })
});

export default connect(null, mapDispatchToProps)(LoggedInView);
