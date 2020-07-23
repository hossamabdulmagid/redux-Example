import { TodosTypeAction } from './todosType'
import Axios from 'axios'


const TodosStart = () => ({
    type: TodosTypeAction.TODOS_START
})


const TodosSuccess = (todo) => ({
    type: TodosTypeAction.TODOS_SUCCESS,
    payload: todo
})

const TodosError = (errorMessage) => ({
    type: TodosTypeAction.TODOS_ERROR,
    payload: errorMessage
})



export const GetAllTodos = () => {
    return dispatch => {
        dispatch(TodosStart())
        Axios.get(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => {
                dispatch(TodosSuccess(res.data))
            })
            .catch(errorMessage => {
                dispatch(TodosError(errorMessage))
                console.log(`some thing error With Todos Api Call`)
            })
    }
}

