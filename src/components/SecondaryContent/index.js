import React from 'react'
import {
  Advertisement,
  Dropdown,
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
  Sticky
} from 'semantic-ui-react'

const SecondaryContent = (props) => (
  <Sticky context={props.contextRef}>
    <Segment compact>
      <Header as="h6" color="grey">
        SPONSORED
      </Header>
      <Advertisement unit='medium rectangle' test='Ad Unit 1' />
    </Segment>

    <Segment basic padded>
      <Menu text icon fluid compact>
        <Grid>
          <Menu.Item name='About' link />
          <Menu.Item name='FAQ' link />
          <Menu.Item name='Privacy' link />
          <Menu.Item name='Terms' link />
          <Menu.Item>
            <Dropdown text="More">
              <Dropdown.Menu>
                <Dropdown.Item>Twitter</Dropdown.Item>
                <Dropdown.Item>AngelCo</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item name='copyright'>
            Framework Stash{' '}
            <Icon name='copyright' />{' '}
            {' '}2017
          </Menu.Item>
        </Grid>
      </Menu>
    </Segment>
  </Sticky>
)

export default SecondaryContent
