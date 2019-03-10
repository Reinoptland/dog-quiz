import { GAME_STARTED, NEXT_QUESTION } from "../actions/api";
import { createSelection } from '../lib/utils'

const initialState = {
    imageUrl: null,
    currentBreeds: null,
    correctAnswer: null,
    breedCount: 3
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case GAME_STARTED: {
            const { currentBreeds } = createSelection(action.payload, state.breedCount)
            return { ...state, currentBreeds }
        }
        case NEXT_QUESTION: {
            const { currentBreeds, correctAnswer, imageUrl } = action.payload
            return { ...state, currentBreeds, correctAnswer, imageUrl }
        }

        default: {
            return state
        }
    }
}