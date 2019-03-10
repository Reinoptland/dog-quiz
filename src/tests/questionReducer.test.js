import questionReducer from '../reducers/question'
import { NEXT_QUESTION, GAME_STARTED } from '../actions/api';

it('Sets a Question in response to NEXT_QUESTION', () => {
    const payload = {
        imageUrl: "https://images.dog.ceo/breeds/kelpie/n02105412_7514.jpg",
        currentBreeds: ['shiba', 'akita', 'kelpie'],
        correctAnswer: 'kelpie'
    }
    const action = {
        type: NEXT_QUESTION,
        payload
    }

    const newState = questionReducer(undefined, action)

    expect(newState).toMatchObject(payload)
});

it('Sets currenBreeds to a sample of breedCount in response to GAME_STARTED', () => {
    const breedList = ['shiba', 'akita', 'kelpie', 'african', 'afghan-hound']
    
    const action = {
        type: GAME_STARTED,
        payload: breedList
    }

    const newState = questionReducer(undefined, action)

    expect(newState.currentBreeds.length).toEqual(newState.breedCount)
});
  
it('should initialize with an empty schema', () => {
    const initialState = questionReducer()
    expect(initialState.imageUrl).toEqual(null)
    expect(initialState.currentBreeds).toEqual(null)
    expect(initialState.correctAnswer).toEqual(null)
    expect(initialState.breedCount).toEqual(3)
})