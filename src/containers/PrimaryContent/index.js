import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postsAction';
import PostCard from '../../components/PostCard';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';

class PrimaryContent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, activeItem } = this.props;
    dispatch(fetchPosts(activeItem));
  }

  render() {
    const { posts } = this.props;

    if (this.props.isFetching) {
      return <p>Loading...</p>;
    }

    if (!posts) {
      return <p>Uh-oh! No content here :(</p>;
    }

    return (
      <Segment.Group stacked>
        <Header as="h2" attached="top">
          Today
        </Header>
        {posts.map(post => {
          return (
            <PostCard
              key={post.id}
              title={post.attributes.title}
              description={post.attributes.description}
              totalComments={post.total_comments}
              totalLikes={post.total_likes}
            />
          );
        })}
        <Button basic icon attached="bottom">
          <Icon name="angle down" />
          SHOW 15 MORE
        </Button>
      </Segment.Group>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.posts.isFetching,
  posts: state.posts.items,
  activeItem: state.navigation.activeItem
});

export default connect(mapStateToProps)(PrimaryContent);
