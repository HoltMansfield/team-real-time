import React, { Component } from 'react'
import { withFormik } from 'formik'
import Yup from 'yup'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import LockIcon from 'material-ui/svg-icons/action/lock'
import TextField from 'material-ui/TextField'
import { CleanForm } from 'styled/forms'


const formikConfig = {
  validationSchema: Yup.object().shape({
    password: Yup.string().min(6).required('Password is required')
  }),
  validateOnChange: true,
  mapPropsToValues: props => ({ password: '' })
}

export class UpdatePasswordContent extends Component {
  constructor(props) {
    super(props)
    this.scrape = this.scrape.bind(this)
  }

  getErrors(fieldName) {
    const { errors, touched } = this.props
    if (errors[fieldName] && touched[fieldName]) {
      return errors[fieldName]
    }

    return null
  }

  scrape() {
    this.props.updatePassword(this.props.values.password)
  }

  render() {
    const {
      values,
      touched,
      errors,
      dirty,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
    } = this.props

    return (
      <Card containerStyle={{ paddingTop: '15px' }}>
        <CardHeader
          title="Update Password"
          avatar={<LockIcon />}
        />
        <CardText>
          <CleanForm onSubmit={this.scrape}>
            <TextField
              id="password"
              type="password"
              floatingLabelText="password"
              floatingLabelFixed={true}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              errorText={this.getErrors('password')}
            /><br />
          </CleanForm>
        </CardText>
        <CardActions>
          <FlatButton label="Login" onClick={this.scrape} />
          <FlatButton label="Cancel" onClick={this.props.goBack} />
        </CardActions>
      </Card>
    )
  }
}

export default withFormik(formikConfig)(UpdatePasswordContent)
