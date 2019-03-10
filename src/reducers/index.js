import { combineReducers } from 'redux'
import breeds from './breeds'
import question from './question'

export default combineReducers({
    breeds,
    question
})