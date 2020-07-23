import { CommentActionType } from './commentType'
import Axios from 'axios'

const CommentStart = () => ({
    type: CommentActionType.COMMENT_START
})



const CommentSuccess = (data) => ({
    type: CommentActionType.COMMENT_SUCCESS,
    payload: data
})


const CommentError = (errorMessage) => ({
    type: CommentActionType.COMMENT_ERROR,
    payload: errorMessage
})



export const GetAllComments = () => {
    return dispatch => {
        dispatch(CommentStart())
        Axios.get(`https://jsonplaceholder.typicode.com/comments`)
            .then(res => {
                dispatch(CommentSuccess(res.data))
            })
            .catch(errorMessage => {
                dispatch(CommentError(errorMessage))
                console.log('SomeThing Error IN COMMENTS FETCH')
            })
    }
}