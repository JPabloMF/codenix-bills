import { LOGIN } from '../Action-types/'

const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                action
            }
        default:
            return state;
    }
}

export default loginReducer
