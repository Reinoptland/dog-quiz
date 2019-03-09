import request from 'superagent'

export const SET_BREEDLIST = 'SET_BREEDLIST'

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