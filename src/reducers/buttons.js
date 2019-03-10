import { BUTTONS_ACTIVE, BUTTONS_DISABLED } from "../actions/buttons";

const initialState = { active: false }

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case BUTTONS_ACTIVE: {
            return { ...state, active: true}
        }

        case BUTTONS_DISABLED: {
            return { ...state, active: false}
        }
            
        default:{
            return state
        }
    }
}

