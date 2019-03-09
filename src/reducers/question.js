import { SET_QUESTION_IMG_URL } from "../actions/api";

export default (state = {}, action) => {
    switch (action.type) {
        case SET_QUESTION_IMG_URL: 
            return { ...state, imageUrl: action.payload}
    
        default:
            return state
    }
}