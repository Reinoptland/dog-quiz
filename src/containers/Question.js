import React, { PureComponent } from 'react'
import '../css/Question.css';
import { connect } from 'react-redux'
import { fetchRandomImageFromBreed } from '../actions/api'
import { shuffle, sampleSize } from 'lodash/collection'

class Question extends PureComponent {
    componentDidMount(){
        this.props.fetchRandomImageFromBreed(this.props.correctAnswer)
    }

    render(){
        const { imageUrl } = this.props
        const options = shuffle([...this.props.options, this.props.correctAnswer])
        
        if(imageUrl === null) return <h1>Loading</h1>

        return <>
            <img className="Question-img" src={imageUrl} alt='lovely dog'/>
            <br/>
            <h1>What breed is this?</h1>
            <br/>
            { options.map(option => 
                <button className="Question-button" >{option}</button>)
            }
        </>
    }
}

const mapStateToProps = state => {
    return {
        imageUrl: state.question.imageUrl,
        options: sampleSize(state.breeds, 2)
    }
}

export default connect(mapStateToProps, { fetchRandomImageFromBreed })(Question)