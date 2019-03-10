import { SET_BREEDLIST } from "../actions/api";

export default (state = [], action = {}) => {
    switch (action.type) {
        case SET_BREEDLIST: 
            return action.payload
    
        default:
            return state
    }
}