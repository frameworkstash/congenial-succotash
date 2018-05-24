import agent from '../../agent';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalRoot from '../../components/ModalRoot';
import { LOGIN } from '../../constants/actionTypes';
import { Button, Form, Grid, Header, Modal } from 'semantic-ui-react';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentWillUnMount() {
    this.setState({
      email: '',
      password: ''
    });
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  submitForm = (email, password) => ev => {
    ev.preventDefault();
    this.props.handleSubmit(email, password);
  };

  render() {
    const { email, password } = this.state;
    return (
      <ModalRoot>
        <Modal.Content>
          <Grid columns={2} textAlign="center" padded stretched centered>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Header as="h2">Login to Join The Community</Header>
                <p>
                  Frameworkstash is a community to share and geek out about<br />the
                  latest tutorials. Join us :)
                </p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Column>
              <Form onSubmit={this.submitForm(email, password)} width="equal">
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
                <Button type="submit" color="blue" fluid>
                  Login
                </Button>
              </Form>
            </Grid.Column>

            <Grid.Row>
              <Grid.Column textAlign="center">
                <p>Don't have an account? Sign up with us.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </ModalRoot>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: (email, password) =>
    dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) })
});

export default connect(null, mapDispatchToProps)(LogIn);
