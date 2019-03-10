import React from 'react'
import { black } from 'ansi-colors';

export default class AnswerButton extends React.Component {
    state = {
        textColor: black
    }

    checkAnswer = (event) => {
        if(event.target.innerText === this.props.correctAnswer){
            this.setState({ textColor: '#90F636'})
        } else {
            this.setState({ textColor: '#F53673'})
        }
    }

    render() {
        const { option } = this.props
        return (
            <button 
                key={option}
                onClick={this.checkAnswer} 
                className="Question-button" 
                style={{ color: this.state.textColor }}
            >
                {option}
            </button>
            )
        }
}