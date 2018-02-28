import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import TimerIcon from 'material-ui/svg-icons/av/av-timer'
import { StyledLink } from 'styled/links'


export default function AboutUsContent(props) {
  return (
    <Card containerStyle={{ paddingTop: '15px' }}>
      <CardHeader
        title="What is Team Real-Time?"
        avatar={<TimerIcon />}
      />
      <CardText>
        Earl Grey tea, watercress sandwiches... and Bularian canapés? Are you up for promotion? The game's not big enough unless it scares you a little. Besides, you look good in a dress. The Enterprise computer system is controlled by three primary main processor cores, cross-linked with a redundant melacortz ramistat, fourteen kiloquad interface modules. My oath is between Captain Kargan and myself. Your only concern is with how you obey my orders. Or do you prefer the rank of prisoner to that of lieutenant? Computer, lights up!
      </CardText>
      <CardActions>
        <StyledLink to="/create-account"><FlatButton label="Create Account" /></StyledLink>
        <StyledLink to="/login"><FlatButton label="Login" /></StyledLink>
      </CardActions>
    </Card>
  )
}
