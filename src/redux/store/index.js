import {createStore} from 'redux'
import AllReducers from '../reducer/AllReducers'

let store = createStore(AllReducers)

export default store