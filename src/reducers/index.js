import { combineReducers } from 'redux'
import breeds from './breeds'
import feedback from './feedback'
import question from './question'

export default combineReducers({
    breeds,
    feedback,
    question
})