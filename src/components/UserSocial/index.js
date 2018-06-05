import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react';

const Follow = () => (
  <Menu.Menu position="right">
    <Menu.Item>
      <Button color="blue">Follow</Button>
    </Menu.Item>
  </Menu.Menu>
);

const Edit = () => (
  <Menu.Menu position="right">
    <Menu.Item>
      <Link to="/my/settings/edit">
        <Button color="grey" basic>
          Edit profile
        </Button>
      </Link>
    </Menu.Item>
  </Menu.Menu>
);

const UserSocial = ({ isUser }) => {
  return isUser ? Edit() : Follow();
};

export default UserSocial;
