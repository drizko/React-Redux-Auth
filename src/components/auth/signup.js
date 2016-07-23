import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {

  handleFormSubmit({ email, password }){
    console.log(email, password);
    this.props.signupUser({ email, password })
  }

  componentWillUnmount(){
    this.props.dispatch({ type: 'CLEAR_ERROR' })
  }

  render(){
    const { handleSubmit, fields: { email, password, passwordConfirm}} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email</label>
          <input className="form-control" {...email}/>
          {email.touched && email.error && <div className="alert-danger">{email.error}</div>}
          <div>
            {this.props.errorMessage}
          </div>
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" {...password}/>
          {password.touched && password.error && <div className="alert-danger">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password</label>
          <input type="password" className="form-control" {...passwordConfirm}/>
          {passwordConfirm.touched && passwordConfirm.error && <div className="alert-danger">{passwordConfirm.error}</div>}
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign Up</button>
      </form>
    )
  }
}

function validate(formProps){
  const errors = {};

  if(!formProps.email){
    errors.email = 'Please enter an email';
  }

  if(!formProps.password){
    errors.password = 'Please enter a password';
  }

  if(!formProps.passwordConfirm){
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if(formProps.password !== formProps.passwordConfirm){
    errors.passwordConfirm = 'Passwords must match'
  }

  return errors;
}

function mapStateToProps(state){
  return {
    errorMessage: state.auth.error
  }
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);
