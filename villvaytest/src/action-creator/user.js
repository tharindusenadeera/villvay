import { getLoggedInUser, signUpUser, singleUser } from "../api/user";
import { setLoggedInUser, authenticated, setUser, setSignUpUser } from "../action/user";


export const getLoggedUser = data => dispatch => {
    getLoggedInUser(data)
    .then(res => {
        if(!res.data.error){
            localStorage.setItem(
                "access_token",
                "Bearer " + res.data.token
              );
        dispatch(authenticated(true));
        dispatch(setLoggedInUser(res.data));
        } else {
        dispatch(authenticated(false));
        }
    });
}

export const getUserSignUp = data => dispatch => {
    signUpUser(data)
    .then(res => {
        if(!res.data.error){
            dispatch(setSignUpUser(res.data));
            localStorage.setItem(
                "access_token",
                "Bearer " + res.data.token  
            );
            dispatch(authenticated(true));
            dispatch(getUser(res.data.id));
        } else {
            dispatch(authenticated(false)); 
        }
    })
}

export const loginGoogle = (e, callBack = null, params = {}) => dispatch => {

}

export const getUser = params => dispatch => {
    singleUser(singleUser)
    .then(res => {
        if(!res.data.error){
            dispatch(setUser(res.data));
        }
    })
}