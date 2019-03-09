import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchRandomImageFromBreed } from '../actions/api'

class Question extends PureComponent {
    componentDidMount(){
        this.props.fetchRandomImageFromBreed(this.props.correctAnswer)
    }


    render(){
        const { imageUrl } = this.props
        
        if(imageUrl === null) return <h1>Loading</h1>

        return <img src={imageUrl}/>
    }
}

const mapStateToProps = state => {
    return {
        imageUrl: state.question.imageUrl,
    }
}

export default connect(mapStateToProps, { fetchRandomImageFromBreed })(Question)