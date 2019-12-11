import Axios from "axios";


export const getLoggedInUser = data => dispatch => {
    return Axios.post(`${process.env.REACT_APP_API_URL_AUTH}login`,data)
}

export const signUpUser = data => dispatch => {
    return Axios.post(`${process.env.REACT_APP_API_URL_AUTH}register`, data)
}

export const singleUser = params => dispatch => {
    return Axios.get(`${process.env.REACT_APP_API_URL_AUTH}users`,
    {
        headers: {
          Authorization: localStorage.access_token
        },
        params
      });
}
