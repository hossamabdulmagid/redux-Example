import { CommentActionType } from './commentType'

const INITAIL_STATE = {
    Fetching: false,
    comments: [],
    errorMessage: ""
}


const commentReducer = (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case CommentActionType.COMMENT_START:
            return {
                ...state,
                Fetching: true,
            }

        case CommentActionType.COMMENT_SUCCESS:
            return {
                ...state,
                Fetching: false,
                comments: action.payload
            }




        case CommentActionType.COMMENT_ERROR:
            return {
                ...state,
                Fetching: false,
                errorMessage: action.payload
            }

        default:
            return state;
    }
}


export default commentReducer