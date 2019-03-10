import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { startGame } from '../actions/api'
import Question from './Question'
import AnswerButton from './AnswerButton';

class Game extends PureComponent {
    componentDidMount(){
        this.props.startGame()
    }

    render(){
        const { breeds, correctAnswer, options } = this.props
        if(breeds.length === 0 || options === null ) return <h1>Loading</h1>

        return <>
            <Question />
            { options.map(option => 
                <AnswerButton 
                    key={`${option}-${Math.random()}`}
                    option={option} 
                    correctAnswer={correctAnswer}
                />
            )}
        </>
    }
}

const mapStateToProps = state => {
    return {
        breeds: state.breeds,
        options: state.question.currentBreeds,
        correctAnswer: state.question.correctAnswer
    }
}

export default connect(mapStateToProps, { startGame })(Game)