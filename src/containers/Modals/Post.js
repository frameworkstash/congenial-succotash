import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalRoot from '../../components/ModalRoot';
import PostSocialShare from '../../components/PostSocialShare';
import CommentsRoot from '../../components/CommentsRoot';
import IndividualComment from '../../components/IndividualComment';
import RelatedPosts from '../../components/RelatedPosts';
import { addComment } from '../../actions/commentActions';
import { upvotePost } from '../../actions/postsAction';
import truncate from 'voca/truncate';
import {
  Advertisement,
  Divider,
  Grid,
  Header,
  Icon,
  Item,
  Label,
  Modal,
  Segment
} from 'semantic-ui-react';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleChange = e => this.setState({ input: e.target.value });

  handleCommentSubmit = comment => e => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(addComment(this.props.data.result, comment));
    !this.props.isFetching && this.setState({ input: '' });
  };

  getPostsComments = (entities, currentPostById) => {
    return entities.tutorials[currentPostById].comments.map(commentById => {
      const { id, content, total_likes, created_at } = entities.comments[
        commentById
      ];
      return (
        <IndividualComment
          key={id}
          comment={content}
          totalLikes={total_likes}
          date={created_at}
        />
      );
    });
  };

  handleUpvoteSubmit = e => {
    e.preventDefault();

    const { dispatch } = this.props;
    dispatch(upvotePost(this.props.data.result));
  };

  render() {
    const { result, entities } = this.props.data;
    const { comments } = entities || {};

    if (this.props.isFetching) {
      return (
        <ModalRoot size="large">
          <Modal.Content>
            <p>Loading...</p>
          </Modal.Content>
        </ModalRoot>
      );
    }

    return (
      <ModalRoot size="large">
        <Modal.Content>
          <Modal.Description>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <Header as="h2">
                    <a
                      href={entities.tutorials[result].website}
                      target="_blank"
                    >
                      {entities.tutorials[result].title}
                    </a>
                    <Header.Subheader>Tagline</Header.Subheader>
                  </Header>
                  {entities.tutorials[result].all_tags.split(',').map(tag => {
                    return (
                      <Label key={tag} color="yellow" size="small">
                        {tag.toUpperCase()}
                      </Label>
                    );
                  })}
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                {/* First Column */}
                <Grid.Column width={11}>
                  <Segment basic>
                    <Grid>
                      <Advertisement unit="leaderboard" test="Ad Unit 2" />
                    </Grid>
                  </Segment>

                  <PostSocialShare
                    description={entities.tutorials[result].description}
                    date={entities.tutorials[result].created_at}
                  />

                  <CommentsRoot
                    input={this.state.input}
                    handleChange={this.handleChange}
                    author={
                      entities.users[entities.tutorials[result].author].name
                    }
                    isFetching={this.props.commentRequest}
                    fetchComment={this.handleCommentSubmit}
                  >
                    {comments && this.getPostsComments(entities, result)}
                  </CommentsRoot>
                </Grid.Column>
                {/* End First Column */}

                {/* Second Column */}
                <Grid.Column width={5}>
                  <Label
                    onClick={this.handleUpvoteSubmit}
                    as="a"
                    color="blue"
                    size="big"
                  >
                    <Icon name="caret up" />
                    UPVOTE
                    <Label.Detail>
                      {entities.tutorials[result].total_likes > 0 &&
                        entities.tutorials[result].total_likes}
                    </Label.Detail>
                  </Label>
                  <Divider />

                  <Segment>
                    <Item
                      href={entities.tutorials[result].website}
                      target="_blank"
                    >
                      <Grid columns="equal">
                        <Grid.Column verticalAlign="middle">
                          <Icon name="safari" color="grey" size="big" />
                        </Grid.Column>
                        <Grid.Column width={11}>
                          <Header as="h5">
                            <Header.Content>
                              Website
                              <Header.Subheader>
                                {truncate(
                                  entities.tutorials[result].website,
                                  32
                                )}
                              </Header.Subheader>
                            </Header.Content>
                          </Header>
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle">
                          <Icon name="angle right" color="grey" size="big" />
                        </Grid.Column>
                      </Grid>
                    </Item>
                  </Segment>

                  <Divider />

                  <Header as="h5" color="grey">
                    RELATED TUTORIALS
                  </Header>

                  <Segment.Group>
                    {entities.tutorials[result].related_tutorials.map(
                      relatedPostsById => {
                        return (
                          <RelatedPosts
                            key={
                              entities.related_tutorials[relatedPostsById].id
                            }
                            tutorial={
                              entities.related_tutorials[relatedPostsById]
                            }
                          />
                        );
                      }
                    )}
                  </Segment.Group>

                  <Advertisement unit="medium rectangle" test="Ad Unit 3" />
                </Grid.Column>
              </Grid.Row>
              {/* End Second Column */}
            </Grid>
          </Modal.Description>
        </Modal.Content>
      </ModalRoot>
    );
  }
}

const mapStateToProps = state => ({
  ...state.post
});

export default connect(mapStateToProps)(Post);
