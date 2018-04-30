import React, { Component } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import Banner from '../Banner';
import Main from '../Main';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner currentUser={this.props.currentUser} />
        <Main />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: cookie.load('jwt') ? state.currentUser : null
});

export default connect(mapStateToProps)(Home);
