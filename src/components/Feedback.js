import React from 'react'
import { connect } from 'react-redux'
import '../css/dog.css'
import '../css/Feedback.css'
import '../css/button.css'

const Feedback = (props) => {
    if(props.correctAnswer === null || props.imageUrl === null) return <h1>Loading</h1>

    return (
        <div className='Feedback'>
            <div className='Feedback__text'>
                <h2>Sorry this is a: </h2>
                <h1><strong>{ props.correctAnswer }</strong></h1>
            </div>
            <img className='dog__image Feedback__image' alt='lovely dog' src={ props.imageUrl }></img>
            <button className='button Feedback__nextQuestionButton' >Woof! -></button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    correctAnswer: state.question.correctAnswer,
    imageUrl: state.question.imageUrl
})

export default connect(mapStateToProps)(Feedback)