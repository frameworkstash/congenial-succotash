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

  getAllPosts = state => {
    return state.result.map(id => state.entities.tutorials[id]);
  };

  render() {
    const { posts } = this.props;

    if (this.props.isFetching) {
      return <p>Loading...</p>;
    }

    if (!posts.entities) {
      return <p>Uh-oh! No content here :(</p>;
    }

    return (
      <div>
        <Segment.Group>
          <Header as="h2" attached="top">
            Today
          </Header>
          {this.getAllPosts(posts).map(post => {
            return (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                skillLevel={post.skill_level}
                totalComments={post.total_comments}
                totalLikes={post.total_likes}
                openModal={this.openModal}
              />
            );
          })}
          {/* <Button basic icon attached="bottom">
            <Icon name="angle down" />
            SHOW 15 MORE
          </Button> */}
        </Segment.Group>
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
