import React, { Component } from 'react'
import { withFormik } from 'formik'
import Yup from 'yup'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import AccountCircleIcon from 'material-ui/svg-icons/action/account-circle'
import TextField from 'material-ui/TextField'
import { CleanForm } from 'styled/forms'


const formikConfig = {
  validationSchema: Yup.object().shape({
    email: Yup.string().email().required('E-mail is required')
  }),
  validateOnChange: true,
  mapPropsToValues: props => ({ email: '' })
}

export class ResetPasswordContent extends Component {
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
    this.props.reset(this.props.values.email)
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
          title="Login"
          avatar={<AccountCircleIcon />}
        />
        <CardText>
          <CleanForm onSubmit={this.scrape}>
            <TextField
              id="email"
              floatingLabelText="email"
              floatingLabelFixed={true}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              errorText={this.getErrors('email')}
            /><br />
          </CleanForm>
        </CardText>
        <CardActions>
          <FlatButton label="Reset password" onClick={this.scrape} />
          <FlatButton label="Cancel" onClick={this.props.goBack} />
        </CardActions>
      </Card>
    )
  }
}

export default withFormik(formikConfig)(ResetPasswordContent)
