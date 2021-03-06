import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import TimerIcon from 'material-ui/svg-icons/av/av-timer'
import { StyledLink } from 'styled/links'


export function LandingContent(props) {
  return (
    <Card containerStyle={{ paddingTop: '15px' }}>
      <CardHeader
        title="Welcome to Team Real-Time"
        avatar={<TimerIcon />}
      />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <StyledLink to="/create-account"><FlatButton label="Create Account" /></StyledLink>
        <StyledLink to="/login"><FlatButton label="Login" /></StyledLink>
      </CardActions>
    </Card>
  )
}
