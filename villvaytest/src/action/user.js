import { GET_LOGGED_IN_USER, AUTHENTICATED, USER_DETAIL, SIGN_UP_USER } from "./ActionTypes";

export const setLoggedInUser = payload => dispatch => {
    dispatch({ type: GET_LOGGED_IN_USER, payload });
  };

export const authenticated = payload => dispatch => {
    dispatch({ type: AUTHENTICATED, payload});
}

export const setUser = payload => dispatch => {
  dispatch({ type: USER_DETAIL, payload});
}

export const setSignUpUser = payload => dispatch => {
  dispatch({ type: SIGN_UP_USER, payload});
}