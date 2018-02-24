import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import SocialSchoolIcon from 'material-ui/svg-icons/social/school'


export function LandingContent(props) {
  return (
    <div>
      <Card>
        <CardHeader
          title="About Us"
          avatar={<SocialSchoolIcon />}
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
    </div>
  );
}
