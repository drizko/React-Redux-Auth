import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://localhost:8000'

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then((response) => {
        // If request is good...
          // - Update state to indicate user is authenticated
          dispatch({ type: AUTH_USER })
          // - Save the JWT token

          // - redirect to the route '/feature'
          browserHistory.push('/feature');
      })
      .catch((err) => {
        // If request is bad...
          // - Show an error to the user
        dispatch(authError('Login Error'))
      })
  }
}

function authError(err){
  return {
    type: AUTH_ERROR,
    payload: err
  }
}
