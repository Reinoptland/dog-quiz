import { combineReducers } from 'redux'
import breeds from './breeds'
import buttons from './buttons'
import feedback from './feedback'
import question from './question'

export default combineReducers({
    breeds,
    buttons,
    feedback,
    question
})