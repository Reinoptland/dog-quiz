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

