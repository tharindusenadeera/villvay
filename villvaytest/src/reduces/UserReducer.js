import { AUTHENTICATED, SIGN_UP_USER, USER_DETAIL } from "../action/ActionTypes";

const initialState = {
    authenticated: false,
    user: [],
    userDetail: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATED:
        return { ...state, authenticated: action.payload };
            break;
        case SIGN_UP_USER:
        return { ...state, user: action.payload };
            break;
        case USER_DETAIL:
        return { ...state, userDetail: action.payload };
            break;
        default:
        return state;
            break;
    }
}