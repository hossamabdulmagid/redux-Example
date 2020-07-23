import { userActionType } from './userType'

const INITAIL_STATE = {
    fetching: false,
    users: [],
    error: ""

}


const userReducer = (state = INITAIL_STATE, action) => {
    switch (action.type) {

        case userActionType.USER_FETCH_START:
            return {
                ...state,
                fetching: true,
            }
        case userActionType.USER_FETCH_SUCCESS:
            return {
                ...state,
                fetching: false,
                users: action.payload
            }

        case userActionType.USER_FETCH_ERROR:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }


        default:
            return state;

    }
}


export default userReducer