import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchBreedList } from '../actions/api'
import { randomBreed } from '../lib/random'
import Question from './Question'

class Game extends PureComponent {
    componentDidMount(){
        this.props.fetchBreedList()
    }


    render(){
        const { breeds } = this.props
        if(breeds.length === 0) return <h1>Loading</h1>

        return <Question correctAnswer={randomBreed(breeds)} />
    }
}

const mapStateToProps = state => {
    return {
        breeds: state.breeds
    }
}

export default connect(mapStateToProps, { fetchBreedList })(Game)