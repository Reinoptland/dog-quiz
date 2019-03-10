import { shuffle, sample, sampleSize } from 'lodash/collection'

export const createBreedAndSubBreedList = (allBreeds) => {
    const breeds = Object.keys(allBreeds)
    const breedList = breeds.reduce((breedList, breed) => {
        if(allBreeds[breed].length === 0){
            return [...breedList, breed]
        }

        const subBreeds = allBreeds[breed].map(subBreed => `${subBreed}-${breed}`)

        return [...breedList, ...subBreeds]
    }, [])
    
    return breedList
}

export const sleep = (duration) => new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration)
})
  
export const createSelection = (breedList, breedCount) => {
    const currentBreeds = shuffle(sampleSize(breedList, breedCount))
    return { 
        currentBreeds, 
    }
}

export const createNextQuestion = (currentBreeds) => {
    return { 
        correctAnswer: sample(currentBreeds),
        currentBreeds: shuffle(currentBreeds)
    }
}