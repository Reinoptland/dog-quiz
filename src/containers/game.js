import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { shuffle, sampleSize, sample } from 'lodash/collection'
import { fetchBreedList } from '../actions/api'
import Question from './Question'
import AnswerButton from './AnswerButton';

class Game extends PureComponent {
    componentDidMount(){
        this.props.fetchBreedList()
    }

    render(){
        const { breeds, correctAnswer, options } = this.props
        if(breeds.length === 0) return <h1>Loading</h1>

        return <>
            <Question breed={correctAnswer} />
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
    const options = shuffle(sampleSize(state.breeds, 3))
    const correctAnswer = sample(options)
    return {
        breeds: state.breeds,
        options,
        correctAnswer
    }
}

export default connect(mapStateToProps, { fetchBreedList })(Game)