import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { shuffle, sampleSize } from 'lodash/collection'
import { fetchBreedList } from '../actions/api'
import { randomBreed } from '../lib/random'
import Question from './Question'
import AnswerButton from './AnswerButton';

class Game extends PureComponent {
    componentDidMount(){
        this.props.fetchBreedList()
    }


    render(){
        const { breeds } = this.props
        const correctAnswer = randomBreed(breeds)
        const options = shuffle([...this.props.options, correctAnswer])
        if(breeds.length === 0) return <h1>Loading</h1>

        return <>
            <Question breed={correctAnswer} />
            { options.map(option => 
                <AnswerButton 
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
        options: sampleSize(state.breeds, 2)
    }
}

export default connect(mapStateToProps, { fetchBreedList })(Game)