import agent from '../../agent';
import DocumentTitle from 'react-document-title';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ProfileNavigation from '../ProfileNavigation';
import ProfileSubTypeUpvoted from '../ProfileSubTypeUpvoted';
import ProfileSubTypeSubmitted from '../ProfileSubTypeSubmitted';
import ProfileSubTypeMade from '../ProfileSubTypeMade';
import UserSocial from '../UserSocial';

import {
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED
} from '../../constants/actionTypes';
import {
  Button,
  Card,
  Container,
  Grid,
  Header,
  Icon,
  List,
  Menu
} from 'semantic-ui-react';

class Profile extends Component {
  componentDidMount() {
    this.props.onLoad(agent.Profile.get(this.props.match.params.username));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const isUser =
      this.props.currentUser &&
      this.props.currentUser.id === this.props.profile.id;

    if (!this.props.profile) {
      return null;
    }

    return (
      <DocumentTitle
        title={`${this.props.profile.firstName} ${
          this.props.profile.lastName
        }'s profile on Frameworkstash`}
      >
        <Container>
          <Grid padded="vertically">
            <Grid.Row columns="equal">
              <Grid.Column>
                <Card
                  color="blue"
                  image={this.props.profile.photoURL}
                  header={`${this.props.profile.firstName} ${
                    this.props.profile.lastName
                  }`}
                  meta={`@${this.props.profile.username}`}
                  description={this.props.profile.headline}
                  extra={
                    <span>
                      <Icon name="calendar" />Joined May 2018
                    </span>
                  }
                />
              </Grid.Column>
              <Grid.Column width={12} verticalAlign="bottom">
                <Card color="blue" fluid>
                  <Menu secondary>
                    <Menu.Item>
                      <Header
                        as="h4"
                        color="blue"
                        textAlign="center"
                        content="Following"
                        subheader="2,280"
                      />
                    </Menu.Item>

                    <Menu.Item>
                      <Header
                        as="h4"
                        color="blue"
                        textAlign="center"
                        content="Followers"
                        subheader="5,550"
                      />
                    </Menu.Item>
                    <UserSocial isUser={isUser} />
                  </Menu>
                </Card>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <ProfileNavigation
                match={this.props.match}
                location={this.props.location}
                upvotesTotal={this.props.profile.upvotesTotal}
                submittedTotal={this.props.profile.submittedTotal}
                madeTotal={this.props.profile.madeTotal}
              />
              <React.Fragment>
                <Switch>
                  <Route
                    exact
                    path={this.props.match.url}
                    component={ProfileSubTypeUpvoted}
                  />
                  <Route
                    path={`${this.props.match.url}/submitted`}
                    component={ProfileSubTypeSubmitted}
                  />
                  <Route
                    path={`${this.props.match.url}/made`}
                    component={ProfileSubTypeMade}
                  />
                </Switch>
              </React.Fragment>
              <Grid.Column width={4}>
                <Card>
                  <Card.Content>
                    <Header as="h5">
                      SHARE {isUser ? 'YOUR' : 'THIS'} PROFILE
                    </Header>
                  </Card.Content>
                  <Card.Content>
                    <Menu widths={2} fluid secondary borderless>
                      <Menu.Item>
                        <Button color="twitter" icon>
                          <Icon name="twitter" /> Twitter
                        </Button>
                      </Menu.Item>
                      <Menu.Item>
                        <Button color="facebook" icon>
                          <Icon name="facebook" /> Facebook
                        </Button>
                      </Menu.Item>
                    </Menu>
                  </Card.Content>
                </Card>

                <Card>
                  <Card.Content>
                    <Header as="h5">RECENT COMMENTS</Header>
                  </Card.Content>
                  <Card.Content>
                    <List relaxed="very" link>
                      {this.props.profile.recent_comments &&
                        this.props.profile.recent_comments.map(slug => {
                          return (
                            <List.Item key={slug.id} as="a">
                              {slug.title}
                            </List.Item>
                          );
                        })}
                    </List>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.common.currentUser,
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: PROFILE_PAGE_LOADED, payload }),
  onUnload: () => dispatch({ type: PROFILE_PAGE_UNLOADED })
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
