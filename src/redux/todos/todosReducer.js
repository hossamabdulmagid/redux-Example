import { TodosTypeAction } from './todosType'



const INITAIL_STATE = {
    Fetching: false,
    todos: [],
    errorMessage: ''
}

const todosReducer = (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case TodosTypeAction.TODOS_START:
            return {
                ...state,
                Fetching: true,
            }
        case TodosTypeAction.TODOS_SUCCESS:
            return {
                ...state,
                Fetching: false,
                todos: action.payload
            }
        case TodosTypeAction.TODOS_ERROR:
            return {
                ...state,
                Fetching: false,
                errorMessage: action.payload
            }


            default:
                return state;
    }
}

export default todosReducer