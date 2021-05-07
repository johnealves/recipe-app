import { SET_EMAIL_LOGIN, SET_VALID_EMAIL } from "../action/actionTypes";

const INITIAL_STATE = {
  emailLogin: '',
  statusEmail: false,
  passwordLogin: '',
  disableLogin: true,
}

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EMAIL_LOGIN:
    return {
      ...state,
      emailLogin: action.email,
    };
  case SET_VALID_EMAIL:
    return {
      ...state,
      statusEmail: action.status,
    }
  default:
    return state;
  }
}

export default loginReducer;

