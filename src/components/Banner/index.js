import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modalAction';
import { Button, Grid, Header, Segment } from 'semantic-ui-react';

const Banner = props => {
  if (props.currentUser) {
    return null;
  }
  return (
    <Segment attached padded="very">
      <Grid container divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <Header as="h1">
              <strong>Discover what you're looking for</strong>
            </Header>
            <p color="grey">
              Frameworkstash surfaces the best new tutorials, every day. It's a
              place for tech-loving enthusiasts to share and geek out about the
              latest Web, Mobile, AI, IoT, VR and many more articles.
            </p>
            <Button
              color="blue"
              size="large"
              onClick={() => {
                props.openModal('MODAL_TYPE_LOGIN');
              }}
            >
              Sign Up
            </Button>
          </Grid.Column>
          <Grid.Column textAlign="center" only="tablet computer">
            {/* {' < Image goes here > '} */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      openModal
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Banner);
