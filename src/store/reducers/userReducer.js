import { SET_USER } from "../actions/userActions";
import { userState } from "../intialStates";

export function userReducer(state = userState, action) {
    switch(action.type) {
        case SET_USER: 
            return { 
                id: action.id,
                login: action.login 
            };  
        default: 
            return state;
    }
}