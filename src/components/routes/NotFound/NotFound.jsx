import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import WarningIcon from 'material-ui/svg-icons/alert/warning'


export class NotFound extends Component {
  render() {
    return (
      <Card containerStyle={{ paddingTop: '15px' }}>
        <CardHeader
          title="Page Not Found"
          avatar={<WarningIcon />}
        />
        <CardText>
          Sorry about that...
        </CardText>
        <CardActions>
          <FlatButton label="Go Back" onClick={() => this.props.history.goBack() } />
        </CardActions>
      </Card>
    )
  }
}

export default withRouter(NotFound)
