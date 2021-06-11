import axios from "axios";
import { Dispatch } from "redux";
import { IAuthUserPayload } from "../../../interfaces/auth";

export function login(user: IAuthUserPayload) {
    return async (dispatch: Dispatch) => {
        const data = await axios.post(`http://172.28.0.99:8080/authenticate`, user)
            .then(resp => resp.data)
        dispatch({
            type: "USER_LOGIN",
            payload: data
        })
    }
}