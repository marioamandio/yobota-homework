import React from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react'

export default () => (
  <Segment placeholder>
    <Header icon>
      <Icon loading name='spinner' /> /> Loading...
    </Header>
  </Segment>
)
