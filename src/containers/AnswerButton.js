import React from 'react'
import { connect } from 'react-redux'
import { nextQuestion } from '../actions/api'
import { showFeedbackThenNextQuestion } from '../actions/feedback'
import '../css/button.css'

const GREEN = '#90F636'
const RED = '#F53673'
const BLACK = 'black'
const ONE_SECOND_DELAY = 1000

class AnswerButton extends React.Component {
    state = {
        textColor: BLACK
    }

    checkAnswer = (event) => {
        if(event.target.innerText === this.props.correctAnswer){
            this.setState({ textColor: GREEN })
            this.props.nextQuestion(ONE_SECOND_DELAY)
        } else {
            this.setState({ textColor: RED })
            this.props.showFeedbackThenNextQuestion()
        }
    }

    render() {
        const { option } = this.props
        return (
            <button 
                key={option}
                onClick={this.checkAnswer} 
                className="button" 
                style={{ color: this.state.textColor }}
            >
                {option}
            </button>
            )
        }
}

const mapStateToProps = (state) => ({
    displayFeedback: state.feedback.displayFeedback
})

export default connect(mapStateToProps, { nextQuestion, showFeedbackThenNextQuestion })(AnswerButton)

