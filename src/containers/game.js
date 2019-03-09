import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchBreedList } from '../actions/api'

class Game extends PureComponent {
    componentDidMount(){
        this.props.fetchBreedList()
    }


    render(){
        return 'Game'
    }
}

export default connect(null, { fetchBreedList })(Game)