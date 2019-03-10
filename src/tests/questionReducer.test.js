import questionReducer from '../reducers/question'
import { SET_QUESTION_IMG_URL } from '../actions/api';

it('Sets a new image url in resonse to SET_QUESTION_IMG_URL', () => {
    const url = "https://images.dog.ceo/breeds/kelpie/n02105412_7514.jpg"
    const action = {
        type: SET_QUESTION_IMG_URL,
        payload: url
    }

    const newState = questionReducer({}, action)

    expect(newState.imageUrl).toStrictEqual(url)
});
  
it('should initialize with an empty schema', () => {
    
    const initialState = questionReducer()
    expect(initialState.imageUrl).toEqual(null)
})