import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchPost } from '../../actions/postsAction';
import { openModal } from '../../actions/modalAction';
import PostCard from '../../components/PostCard';
import { Header, Segment } from 'semantic-ui-react';

class PrimaryContent extends Component {
  componentWillMount() {
    const { dispatch, activeItem } = this.props;
    dispatch(fetchPosts(activeItem));
  }

  openModal = id => e => {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(fetchPost(id));
    dispatch(openModal('MODAL_TYPE_POST'));
  };

  render() {
    const { posts } = this.props;

    if (this.props.isFetching) {
      return <p>Loading...</p>;
    }

    if (!posts) {
      return <p>Uh-oh! No content here :(</p>;
    }

    return (
      <div>
        {Object.keys(posts).map(date => {
          return (
            <Segment.Group key={date}>
              <Header as="h2" attached="top">
                {date}
              </Header>
              {posts[date].map(post => {
                return (
                  <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    description={post.description}
                    skillLevel={post.skill_level}
                    totalComments={post.total_comments}
                    totalLikes={post.total_likes}
                    upvoted={post.upvoted}
                    openModal={this.openModal}
                  />
                );
              })}
            </Segment.Group>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.posts.isFetching,
  posts: state.posts.data,
  activeItem: state.navigation.activeItem
});

export default connect(mapStateToProps)(PrimaryContent);
