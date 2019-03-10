import questionReducer from '../reducers/question'
import { NEXT_QUESTION } from '../actions/api';

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

    expect(newState).toStrictEqual(payload)
});
  
it('should initialize with an empty schema', () => {
    
    const initialState = questionReducer()
    expect(initialState.imageUrl).toEqual(null)
    expect(initialState.currentBreeds).toEqual(null)
    expect(initialState.correctAnswer).toEqual(null)
})