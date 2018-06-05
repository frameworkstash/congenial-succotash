import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import cookie from 'react-cookies';

const PrivateRoute = ({ component: Component, ...rest }, currentUser) => (
  <Route
    {...rest}
    render={props =>
      currentUser && cookie.load('jwt') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => ({
  currentUser: state.common.currentUser
});

export default connect(mapStateToProps)(PrivateRoute);
