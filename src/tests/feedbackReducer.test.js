import feedbackReducer from '../reducers/feedback'
import { SHOW_FEEDBACK, HIDE_FEEDBACK } from '../actions/feedback';

it('should initialize displayFeedback to false', () => {
    const initialState = feedbackReducer()
    expect(initialState.displayFeedback).toEqual(false)
})

it('sets displayFeedback to true in response to SHOW_FEEDBACK', () => {
    const action = {
        type: SHOW_FEEDBACK,
    }

    const newState = feedbackReducer(undefined, action)

    expect(newState.displayFeedback).toEqual(true)
});

it('sets displayFeedback to true in response to HIDE_FEEDBACK', () => {
    const action = {
        type: HIDE_FEEDBACK,
    }

    const initialState = feedbackReducer({ displayFeedback: true })
    const newState = feedbackReducer(initialState, action)

    expect(initialState.displayFeedback).toEqual(true)
    expect(newState.displayFeedback).toEqual(false)
});