import React from 'react'
import {
  Button,
  Header,
  Icon,
  Item,
  Label,
  Popup,
  Segment
} from 'semantic-ui-react'

const PrimaryContent = () => (
  <Segment.Group stacked>
    <Header as='h2' attached="top">
      Today
    </Header>

    <Segment attached>
      <Item.Group link unstackable>
        <Item>
          <Item.Content>
            <Item.Header>Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Extra>
              <Label>Label</Label>
              <Popup
                trigger={<span>+ 1</span>}
                content={<Label>Label</Label>}
                on="click"
                position="right center"
              />
              <Button basic icon compact size="tiny" floated="right">
                <Icon name="comments" />
                10
              </Button>
              <Button basic icon compact size="tiny" floated="right">
                <Icon name="like" />
                389
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>


    <Button basic icon attached="bottom">
      <Icon name="angle down" />
        SHOW 15 MORE
    </Button>
  </Segment.Group>
)

export default PrimaryContent
