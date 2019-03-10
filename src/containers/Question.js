import React, { PureComponent } from 'react'
import '../css/Question.css';
import '../css/dog.css'

import { connect } from 'react-redux'
import { nextQuestion } from '../actions/api'

class Question extends PureComponent {
    componentDidMount(){
        this.props.nextQuestion()
    }

    render(){
        const { imageUrl } = this.props
        
        if(imageUrl === null) return <h1>Loading</h1>

        return <>
            <img className="dog__image Question-img" src={imageUrl} alt='lovely dog'/>
            <br/>
            <h1>What breed is this?</h1>
            <br/>

        </>
    }
}

const mapStateToProps = state => {
    return {
        imageUrl: state.question.imageUrl,
        correctAnswer: state.question.correctAnswer
    }
}

export default connect(mapStateToProps, { nextQuestion })(Question)