import { SET_EMAIL_LOGIN } from "../action/actionTypes";

const INITIAL_STATE = {
  emailLogin: '',
  passwordLogin: '',
  disableLogin: true
}

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EMAIL_LOGIN:
    return {
      ...state,
      emailLogin: action.email,
    };
  default:
    return state;
  }
}

export default loginReducer;

