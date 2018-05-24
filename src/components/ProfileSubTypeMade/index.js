import agent from '../../agent';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PROFILE_SUBTYPE_LOADED } from '../../constants/actionTypes';

import MainContent from '../MainContent';
import ContentHeader from '../ContentHeader';
import ContentItemList from '../ContentItemList';
import ProfileSubTypeIsFetching from '../ProfileSubTypeIsFetching';

class ProfileSubTypeMade extends Component {
  componentDidMount() {
    const { username } = this.props.profile;
    this.props.onLoad(agent.Articles.madeBy(username));
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.profile.madePosts) {
      const { username } = this.props.profile;
      this.props.onLoad(agent.Articles.madeBy(username));
    }
  }

  render() {
    const { madePosts } = this.props.profile;
    if (!madePosts) {
      return (
        <ProfileSubTypeIsFetching message={'Hunting down created posts...'} />
      );
    }

    return (
      <MainContent>
        <ContentHeader title={`${this.props.profile.madeTotal} Made`} />
        <ContentItemList posts={madePosts} />
      </MainContent>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: PROFILE_SUBTYPE_LOADED, payload, subtype: 'madePosts' })
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSubTypeMade);
