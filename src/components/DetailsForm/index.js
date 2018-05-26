import React, { Component } from 'react';
import { Divider, Form, Input, Image } from 'semantic-ui-react';

class DetailsForm extends Component {
  render() {
    const {
      email,
      avatar,
      headline,
      firstName,
      lastName,
      username
    } = this.props;
    return (
      <Form>
        <Form.Group>
          <Form.Input
            label="First name"
            placeholder={firstName}
            width={8}
            fluid
            transparent
          />
          <Form.Input
            label="Last name"
            placeholder={lastName}
            width={8}
            fluid
            transparent
          />
        </Form.Group>
        <Divider section />
        <Form.Field>
          <label>Avatar</label>
          <Image src={avatar} size="tiny" circular />
          <Divider section />
        </Form.Field>
        <Form.Field>
          <label>Username</label>
          <Input placeholder={`@${username}`} fluid transparent />
          <Divider section />
        </Form.Field>
        <Form.Field>
          <label>Headline</label>
          <Input placeholder={headline} fluid transparent />
          <Divider section />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input placeholder={email} fluid transparent />
          <Divider section />
        </Form.Field>
      </Form>
    );
  }
}

export default DetailsForm;
