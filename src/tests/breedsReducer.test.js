import breedsReducer from '../reducers/breeds'
import { SET_BREEDLIST } from '../actions/api';

it('Sets a new Breedlist in resonse to SET_BREEDLIST', () => {
    const breeds = ['golden-retriever', 'corgi']
    const action = {
        type: SET_BREEDLIST,
        payload: breeds
    }

    const newState = breedsReducer([], action)

    expect(newState).toStrictEqual(breeds)
});
  