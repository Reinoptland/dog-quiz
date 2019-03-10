import { sleep } from '../lib/utils'
import { nextQuestion } from './api'
import { disableButtons } from './buttons'

export const SHOW_FEEDBACK = 'SHOW_FEEDBACK'
export const HIDE_FEEDBACK = 'HIDE_FEEDBACK'

const ONE_THIRD_OF_A_SECOND = 333
const TWO_SECONDS = 2000


export const showFeedback = () => ({
    type: SHOW_FEEDBACK
})

export const showFeedbackThenNextQuestion = () => {
    return async (dispatch, getState) => {
        dispatch(disableButtons())
        await sleep(ONE_THIRD_OF_A_SECOND)
        dispatch(showFeedback())
        await sleep(TWO_SECONDS)
        dispatch(hideFeedback())
        nextQuestion()(dispatch, getState)
    }
}

export const hideFeedback = () => ({
    type: HIDE_FEEDBACK
})