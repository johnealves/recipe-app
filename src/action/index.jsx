import { SET_EMAIL_LOGIN } from "./actionTypes";

export const setEmailLogin = (email) => ({
  type: SET_EMAIL_LOGIN,
  email,
})