import agent from '../../agent';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PROFILE_SUBTYPE_LOADED } from '../../constants/actionTypes';

import MainContent from '../MainContent';
import ContentHeader from '../ContentHeader';
import ContentItemList from '../ContentItemList';
import ProfileSubTypeIsFetching from '../ProfileSubTypeIsFetching';

class ProfileSubTypeSubmitted extends Component {
  componentDidMount() {
    const { username } = this.props.profile;
    this.props.onLoad(agent.Articles.submittedBy(username));
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.profile.submittedPosts) {
      const { username } = this.props.profile;
      this.props.onLoad(agent.Articles.submittedBy(username));
    }
  }

  render() {
    const { submittedPosts } = this.props.profile;
    if (!submittedPosts) {
      return (
        <ProfileSubTypeIsFetching message={'Hunting down submitted posts...'} />
      );
    }

    return (
      <MainContent>
        <ContentHeader
          title={`${this.props.profile.submittedTotal} Submitted`}
        />
        <ContentItemList posts={submittedPosts} />
      </MainContent>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({
      type: PROFILE_SUBTYPE_LOADED,
      payload,
      subtype: 'submittedPosts'
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ProfileSubTypeSubmitted
);
