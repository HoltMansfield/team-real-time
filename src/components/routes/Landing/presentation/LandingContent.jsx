import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import AvAvTimerIcon from 'material-ui/svg-icons/av/av-timer'


export function LandingContent(props) {
  return (
    <Card containerStyle={{ paddingTop: '15px' }}>
      <CardHeader
        title="Welcome to Team Real-Time"
        avatar={<AvAvTimerIcon />}
      />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton label="Create Account" />
        <FlatButton label="Login" />
      </CardActions>
    </Card>
  )
}
