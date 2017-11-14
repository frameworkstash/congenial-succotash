import React from 'react'
import {
  Advertisement,
  Dropdown,
  Grid,
  Icon,
  Menu,
  Segment
} from 'semantic-ui-react'

const SecondaryContent = () => (
  <div>
    <Segment compact>
      <Advertisement unit='medium rectangle' test='Ad Unit 1' />
      <br />
      <Advertisement unit='medium rectangle' test='Ad Unit 2' />
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
  </div>
)

export default SecondaryContent
