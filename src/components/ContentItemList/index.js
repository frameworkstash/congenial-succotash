import React, { Component } from 'react';
import ContentItem from '../ContentItem';

class ContentItemList extends Component {
  render() {
    return this.props.posts.map(post => {
      return (
        <ContentItem
          key={post.id}
          title={post.title}
          description={post.description}
          skillLevel={post.skill_level}
          totalComments={post.total_comments}
          totalLikes={post.total_likes}
          upvoted={post.upvoted}
        />
      );
    });
  }
}

export default ContentItemList;
