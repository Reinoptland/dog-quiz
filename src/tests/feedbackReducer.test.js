import feedbackReducer from '../reducers/feedback'

it('should initialize displayFeedback to false', () => {
    const initialState = feedbackReducer()
    expect(initialState.displayFeedback).toEqual(false)
})
  