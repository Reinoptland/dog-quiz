import { SET_QUESTION_IMG_URL } from "../actions/api";

const initialState = {
    imageUrl: null
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_QUESTION_IMG_URL: 
            return { ...state, imageUrl: action.payload}
    
        default:
            return state
    }
}