import request from 'superagent'
import { createBreedAndSubBreedList } from '../lib/utils'

export const SET_BREEDLIST = 'SET_BREEDLIST'
export const SET_QUESTION_IMG_URL = 'SET_QUESTION_IMG_URL'
export const GAME_STARTED = 'GAME_STARTED'

export const startGame = () => {
    return async (dispatch) => {
        const response = await request('https://dog.ceo/api/breeds/list/all')
        const breedList = createBreedAndSubBreedList(response.body.message)

        dispatch(setBreedList(breedList))
        dispatch(gameStarted(breedList))
    }
}

export const setBreedList = (breedList) => ({
    type: SET_BREEDLIST, payload: breedList
})

export const fetchRandomImageFromBreed = (breed) => {
    return async (dispatch) => {
        let response 

        // We check to see if the breed is a subbreed
        if(breed.includes('-')){
            // if it is a sub breed the api endpoint is different
            const [subBreed, superBreed] = breed.split('-')
            response = await request(`https://dog.ceo/api/breed/${superBreed}/${subBreed}/images/random`)
        } else {
            response = await request(`https://dog.ceo/api/breed/${breed}/images/random`)
        }
        
        const url = response.body.message
        dispatch(setQuestionImageUrl(url))
    }
}

export const setQuestionImageUrl = (url) => ({
    type: SET_QUESTION_IMG_URL, payload: url
})

export const gameStarted = (breedList) => ({
    type: GAME_STARTED, payload: breedList
})