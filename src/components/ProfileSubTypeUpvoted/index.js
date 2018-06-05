import agent from '../../agent';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PROFILE_SUBTYPE_LOADED } from '../../constants/actionTypes';

import MainContent from '../MainContent';
import ContentHeader from '../ContentHeader';
import ContentItemList from '../ContentItemList';
import ProfileSubTypeIsFetching from '../ProfileSubTypeIsFetching';

class ProfileSubTypeUpvoted extends Component {
  componentDidMount() {
    const { username } = this.props.profile;
    this.props.onLoad(agent.Articles.favoritedBy(username));
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.profile.upvotedPosts) {
      const { username } = this.props.profile;
      this.props.onLoad(agent.Articles.submittedBy(username));
    }
  }

  render() {
    const { upvotedPosts } = this.props.profile;
    if (!upvotedPosts) {
      return (
        <ProfileSubTypeIsFetching message={'Hunting down upvoted posts...'} />
      );
    }

    return (
      <MainContent>
        <ContentHeader title={`${this.props.profile.upvotesTotal} Upvotes`} />
        <ContentItemList posts={upvotedPosts} />
      </MainContent>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: PROFILE_SUBTYPE_LOADED, payload, subtype: 'upvotedPosts' })
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ProfileSubTypeUpvoted
);
