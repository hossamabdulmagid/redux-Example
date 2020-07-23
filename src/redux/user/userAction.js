import { userActionType } from './userType'
import Axios from 'axios'




const UserStart = () => ({
    type: userActionType.USER_FETCH_START

})



const UserSuccess = (data) => ({
    type: userActionType.USER_FETCH_SUCCESS,
    payload: data
})


const UserError = (error) => ({
    type: userActionType.USER_FETCH_ERROR,
    payload: error
})




export const GetAllUsers = () => {
    return dispatch => {
        dispatch(UserStart())
        Axios
            .get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                dispatch(UserSuccess(res.data))
            })
            .catch(error => {
                dispatch(UserError(error))
                console.log("SomeThing Wrong in Users Data")
            })
    }
}