import agent from './agent';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT, CLOSE_MODAL } from './constants/actionTypes';
import cookie from 'react-cookies';
import store from './store';
import { push } from 'react-router-redux';
import DocumentTitle from 'react-document-title';

import NavbarRoot from './containers/NavbarRoot';
import ModalRoot from './containers/ModalRoot';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileSettings from './components/ProfileSettings';
import PrivateRoute from './containers/PrivateRoute';

class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch({ type: CLOSE_MODAL });
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }

  componentDidMount() {
    const token = cookie.load('jwt');
    if (token) {
      console.log('Im inside App.js', token);
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.appLoaded) {
      const token = cookie.load('jwt');
      if (token) {
        console.log('Im inside App.js', token);
        agent.setToken(token);
      }

      this.props.onLoad(token ? agent.Auth.current() : null, token);
    }
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <DocumentTitle title="Frameworkstash">
          <React.Fragment>
            <NavbarRoot currentUser={this.props.currentUser} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/@:username" component={Profile} />
              <PrivateRoute
                exact
                path="/my/settings/edit"
                component={ProfileSettings}
              />
            </Switch>
            <ModalRoot />
          </React.Fragment>
        </DocumentTitle>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  appLoaded: state.common.appLoaded,
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () => dispatch({ type: REDIRECT })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
