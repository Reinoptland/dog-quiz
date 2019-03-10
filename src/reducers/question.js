import { SET_QUESTION_IMG_URL, GAME_STARTED } from "../actions/api";
import { shuffle, sample, sampleSize } from 'lodash/collection'

const initialState = {
    imageUrl: null,
    currentBreeds: null,
    correctAnswer: null,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_QUESTION_IMG_URL: 
            return { ...state, imageUrl: action.payload}
        case GAME_STARTED: 
            const currentBreeds = shuffle(sampleSize(action.payload, 3))
            const correctAnswer = sample(currentBreeds)
            return { ...state, currentBreeds, correctAnswer }
        default:
            return state
    }
}