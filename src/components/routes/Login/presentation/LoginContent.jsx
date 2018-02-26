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
    email: Yup.string().email().required('E-mail is required'),
    password: Yup.string().min(6).required('Password is required')
  }),
  validateOnChange: true,
  mapPropsToValues: props => ({ email: '', password: '' })
}

export class LoginContent extends Component {
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
    const userLoginAttempt = {
      email: this.props.values.email,
      password: this.props.values.password
    }
    this.props.login(userLoginAttempt)
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

export default withFormik(formikConfig)(LoginContent)
