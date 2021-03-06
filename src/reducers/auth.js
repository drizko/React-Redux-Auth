import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types';

export default function authUser(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, error: '' };
      break;
    case UNAUTH_USER:
      return { ...state, authenticated: false, error: '' };
      break;
    case AUTH_ERROR:
      return { ...state, error: action.payload }
      break;
    case 'CLEAR_ERROR':
      return {...state, error: ''}
  }

  return state;
}
