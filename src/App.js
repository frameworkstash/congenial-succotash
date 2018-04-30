import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseAuth } from './firebase';
import { onLoad } from './actions/commonActions';
import { current } from './actions/authActions';
import cookie from 'react-cookies';

import NavbarRoot from './containers/NavbarRoot';
import Home from './components/Home';
import ModalRoot from './containers/ModalRoot';

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        const providerData = user.providerData[0];
        console.log(
          'Component => App, componentWillMount => firebase',
          providerData
        );
        dispatch(current(providerData));
      }
    });
    dispatch(onLoad());
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <React.Fragment>
          <NavbarRoot currentUser={this.props.currentUser} />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <ModalRoot />
        </React.Fragment>
      );
    }
    return <NavbarRoot currentUser={this.props.currentUser} />;
  }
}

const mapStateToProps = state => ({
  appLoaded: state.common.appLoaded,
  currentUser: cookie.load('jwt') ? state.currentUser : null
});

export default connect(mapStateToProps)(App);
