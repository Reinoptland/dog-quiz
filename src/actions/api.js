import request from 'superagent'

export const SET_BREEDLIST = 'SET_BREEDLIST'
export const SET_QUESTION_IMG_URL = 'SET_QUESTION_IMG_URL'

export const fetchBreedList = () => {
    return async (dispatch) => {
        const response = await request('https://dog.ceo/api/breeds/list/all')
        const allBreeds = response.body.message
        const breeds = Object.keys(allBreeds)
        const breedList = breeds.reduce((breedList, breed, _, breeds) => {
            if(allBreeds[breed].length === 0){
                return [...breedList, breed]
            }

            const subBreeds = allBreeds[breed].map(subBreed => `${subBreed}-${breed}`)

            return [...breedList, ...subBreeds]
        }, [])

        dispatch(setBreedList(breedList))
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