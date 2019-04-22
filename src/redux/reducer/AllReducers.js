import {combineReducers} from 'redux'
import MessageReducer from './MessageReducer'

const AllReducers = combineReducers(
    {
        allMessages: MessageReducer
    }
)


export default AllReducers