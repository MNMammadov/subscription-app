import { IAuthUserPayload } from "../../../interfaces/auth";

interface IAction {
    type: string,
    payload: IAuthUserPayload
}

const initialState = {
    status: '',
    data: {},
    errors: [],
}

function userReducer(state = initialState, action: IAction) {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                data: action.payload
            }

        default:
            return state;

    }
}
export default userReducer
