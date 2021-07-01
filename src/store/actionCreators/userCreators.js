import { SET_USER } from '../actions/userActions';

function set_user({ id, login }) {
    return { 
        type: SET_USER,
        id: id,
        login: login
    };
}

export default set_user;