import React from 'react'
import { connect } from 'react-redux'
import { nextQuestion } from '../actions/api'
import '../css/button.css'

const GREEN = '#90F636'
const RED = '#F53673'
const BLACK = 'black'

class AnswerButton extends React.Component {
    state = {
        textColor: BLACK
    }

    checkAnswer = (event) => {
        if(event.target.innerText === this.props.correctAnswer){
            this.setState({ textColor: GREEN })
            this.props.nextQuestion()
        } else {
            this.setState({ textColor: RED })
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

export default connect(null, { nextQuestion })(AnswerButton)

