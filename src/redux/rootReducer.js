import { combineReducers } from 'redux'

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import userReducer from '../redux/user/userReducer'
import commentReducer from '../redux/comments/commentsReducer'
import todosReducer from '../redux/todos/todosReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [''],
}
const rootReducer = combineReducers({
    user: userReducer,
    comment: commentReducer,
    todo: todosReducer,


})
export default persistReducer(persistConfig, rootReducer)
