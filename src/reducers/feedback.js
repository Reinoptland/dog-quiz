import { HIDE_FEEDBACK, SHOW_FEEDBACK } from "../actions/feedback";

const initialState = {
    displayFeedback: false
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case HIDE_FEEDBACK: {
            return { ...state, displayFeedback: false }
        }

        case SHOW_FEEDBACK: {
            return { ...state, displayFeedback: true }
        }
    
        default: { 
            return state
        }
    }
}

